# This-That-backend-task

DBML

```
Enum Gender {
  FEMALE
  MALE
  OTHER
}

Table marvel_character {
  id integer [primary key]
  name string // name
  gender  Gender// gender
  dateOfBirth date // date of birth, thus deriving the age
  filmStatus boolean // if hero is active in any marvel films
  deleted_date timestamptz // soft delete purposes
  created_date timestamptz
  last_modified_date timestamptz
}


Table marvel_character_relations {
  id integer [primary key]
  fk_id_marvel_character integer // main hero
  fk_id_related_marvel_character integer // represents the related hero
  isEnemy boolean // if not an enemy then it is an accomply
  deleted_date timestamptz // soft delete purposes
  created_date timestamptz
  last_modified_date timestamptz
}

Ref: marvel_character.id < marvel_character_relations.fk_id_marvel_character // one-to-many
Ref: marvel_character.id < marvel_character_relations.fk_id_related_marvel_character // one-to-many

```

#

[ER DIAGRAM](https://github.com/dVp007/this-that-backend-task/blob/main/er-diagram.pdf)

#

# STEPS TO IMPLEMENT SQL QUERIES

```
Step1: Create a database in postgres.
Step2: Use the database that is created.
Step3: Copy the sql and run it.
```

#

# Explanation and the way api should be implemented

- 1.  API endpoint Name - api/hero/updateAccomplices
- 2.  API endpoint Method - PATCH
- 3.  Request Body must contain heroId instead in path as it would be more secure
- 4.  With the help of heroId and each relatedHeroId in the `hero_relation` table find the relation check if isEnemy is false as we are updating only the related accomplices
- 5.  If the current relatedHeroId is not present in the database skip further processing and move on to another relatedHero
- 6.  If relatedHero found update the respective hero details in the `hero` table, fetched from requestBody.
- 7.  Lastly send success message in response with error code 204.
