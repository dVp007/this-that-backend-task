# This-That-backend-task

DBML

```
Table heros {
  id integer [primary key]
  name string // name
  gender string // gender
  dateOfBirth date // date of birth, thus deriving the age
  filmStatus boolean // if hero is active in any marvel films
}


Table hero_inter_relations {
id integer [primary key]
parent_hero integer // main hero
related_hero integer // represents the related hero
isEnemy boolean // if not an enemy then it is an accomplis
}

Ref: heros.id < hero_inter_relations.parent_hero // one-to-many
Ref: heros.id < hero_inter_relations.related_hero // one-to-many
```

[ER DIAGRAM](https://github.com/dVp007/this-that-backend-task/blob/main/er-diagram.pdf)
