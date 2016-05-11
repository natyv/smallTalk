# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


small_talk = ["What do you do in your spare time?","Do you or have you ever played a musical instrument?","Do you follow any sports?","Do you have any Weird Hobbies? (collecting rocks, counting grains of salt, etc)", "What are your Talents? (cooking, Drawing, Dancing, Instruments, etc)","What is your favourite movie?","What is your favourite genre of music?","What song that makes you feel amazing? Why?","The song that gets you up when you are down?","What is your favourite colour?","What is your favourite soft drink?","What is favourite Academic Subject?","What is your favourite food?","What is your favourite cocktail?","What is your favourite animal?","Dog or Cat","What animal are you most scared of?","Would you ever skinny dip?","Would you ever go camping in a far away forest?","Would you ever do Karaoke?","What do you want to accomplish in life?", "Where do you see yourself in 10 years?","What is your ideal job?", "Whats appealing about your career?", "Why are there so many guy comedians, but no girls? Are guys funnier?","If you were a Homeless person, and you find a briefcase with 1 Million dollars, what would you do with it?","If you could buy one thing, anything, what would it be?","Would you rather earn little at a job you really enjoy, or earn lots of money at a job you hate?","What would you do with a million dollars?","Favorite childhood animated movie? (Aladdin, Little Mermaid, 101 Dalmatians, etc)","Favorite toys as a kid?","Did you go to Disney Land?","Countries you have visited?"]

small_talk.each do |convo|
  talks = Smalltalk.new
  talks.conversation = convo
  talks.save
end
