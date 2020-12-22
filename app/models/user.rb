class User < ApplicationRecord
  class << self
    def find_or_create_from_auth_hash(auth_hash)
      find_or_create_by(auth_hash_to_entity(auth_hash))
    end

    private

    def auth_hash_to_entity(auth_hash)
      {
        display_name: auth_hash["extra"]["id_info"]["name"],
        email: auth_hash["extra"]["id_info"]["email"],
        avatar: auth_hash["extra"]["id_info"]["picture"]
      }
    end
  end
end