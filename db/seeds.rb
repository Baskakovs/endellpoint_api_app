# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

News.destroy_all

5.times do
    News.create(
        title: Faker::Book.title,
        description: Faker::Lorem.paragraph(sentence_count: 2),
        # image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['news']),
        admin_id: Admin.first
    )
end
print "Successfully seeded the tables!"

