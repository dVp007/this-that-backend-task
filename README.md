# This-That-backend-task

DBML

```
Enum Gender {
  FEMALE
  MALE
  OTHER
}

Table heros {
  id integer [primary key]
  name string // name
  gender  Gender// gender
  dateOfBirth date // date of birth, thus deriving the age
  filmStatus boolean // if hero is active in any marvel films
  deleted_date timestamptz // soft delete purposes
  created_date timestamptz
  last_modified_date timestamptz
}


Table hero_inter_relations {
  id integer [primary key]
  fk_id_hero integer // main hero
  fk_id_related_hero integer // represents the related hero
  isEnemy boolean // if not an enemy then it is an accomply
  deleted_date timestamptz // soft delete purposes
  created_date timestamptz
  last_modified_date timestamptz
}

Ref: heros.id < hero_inter_relations.fk_id_hero // one-to-many
Ref: heros.id < hero_inter_relations.fk_id_related_hero // one-to-many

```

[ER DIAGRAM](https://github.com/dVp007/this-that-backend-task/blob/main/er-diagram.pdf)
