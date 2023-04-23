-- Enums
CREATE TYPE Gender AS ENUM('FEMALE', 'MALE', 'OTHER');

-- Table Definition
CREATE TABLE "public"."marvel_character" (
    "id" INT GENERATED ALWAYS AS IDENTITY,
    "deleted_date" timestamptz, -- soft delete purposes
    "created_date" timestamptz,
    "last_modified_date" timestamptz,
    "name" varchar(100) NOT NULL,
    "gender" Gender DEFAULT NULL,
    "date_of_birth" date,
    "film_status" boolean,
    PRIMARY KEY ("id")
);

-- Table Definition
CREATE TABLE "public"."marvel_character_relation" (
    "id" INT GENERATED ALWAYS AS IDENTITY,
    "deleted_date" timestamptz, -- soft delete purposes
    "created_date" timestamptz,
    "last_modified_date" timestamptz,
    "is_enemy" boolean,
    "fk_id_marvel_character" int,
    "fk_id_related_marvel_character" int,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_id_marvel_character
      FOREIGN KEY(fk_id_marvel_character) 
	      REFERENCES marvel_character(id),
    CONSTRAINT fk_id_related_marvel_character
      FOREIGN KEY(fk_id_related_marvel_character) 
	      REFERENCES marvel_character(id)
);
