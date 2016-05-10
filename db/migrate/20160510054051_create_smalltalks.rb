class CreateSmalltalks < ActiveRecord::Migration
  def change
    create_table :smalltalks do |t|
      t.string :conversation

      t.timestamps null: false
    end
  end
end
