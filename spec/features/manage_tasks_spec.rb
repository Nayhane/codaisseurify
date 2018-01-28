require 'rails_helper'

feature 'Manage tasks', js: true do
  before(:each) do
    visit ("http://localhost:3000/artists/6")
    fill_in 'song_name', with: 'blue '
    page.execute_script("$('form').submit()")
  end

  scenario 'add a new task' do
    expect(page).to have_content('blue')
  end


  scenario 'delete' do
    visit ("http://localhost:3000/artists/6")
    fill_in 'song_name', with:'red is black'
    page.execute_script("$('form').submit()")
    click_link('Delete')

    expect(page).not_to have_content('red is black')
  end


  scenario 'delete all songs' do
    visit ("http://localhost:3000/artists/6")
    fill_in 'song_name', with:'red is black'
    page.execute_script("$('form').submit()")

    fill_in 'song_name', with:'black'
    page.execute_script("$('form').submit()")

    fill_in 'song_name', with:'green'
    page.execute_script("$('form').submit()")

    click_link('Delete all Songs')

    expect(page).not_to have_content('red is black','black', 'green')
  end
end
