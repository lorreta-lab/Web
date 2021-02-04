enum AllocationSpace{
RO_SPACE,//unchangable object space
NEW_SPACE,// new generation using space to GC copying algorithm
OLD_SPACE,// object space for living long of old generation
CODE_SPACE,//object space for coding of old generation
MAP_SPACE,//map object of old generation
LO_SPACE,//big object space of old generation
NEW_LO_SPACE,//big object space of new generation
FIRST_SPACE=RO_SPACE,
LAST_SPACE=NEW_LO_SPACE,
FIRST_GROWABLE_PAGED_SPACE=OLD_SPACE,
LAST_GROWABLE_PAGED_SPACE=MAP_SPACE
};