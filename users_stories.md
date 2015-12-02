### Betsy (name TBD)

A user can...
- create, edit, and delete a `profile`
- create and edit crochet/knitting projects

A `project` consists of...
- an Etsy reference photo (`refimg`)
- an image of their completed project (`img`)
- a `pattern`

A `pattern` consists of...
- a `title`
- a list of `supplies`
- `steps`
- a `source`



MODELS
_user_ (has many projects and their patterns)
id
email   
username  
password
bio  
avatar  

_project_ (has a pattern)  
id  
user_id  
pattern (ref)  
refimg  
img   
created_at  
updated_at   

_pattern_ (belongs to a project)  
id
user_id (ref)
project (ref)
title
supplies
steps  
source  






Planning:
- Day 1: wireframes (name, dependencies, game plan, research api) & set up schemas
- Day 2: api & authentication
- Day 3: api & models
- Day 4: angular & CSS
- Day 5: edit documentation and deploy
