#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Ghost {
    char *name;
    int roomNumber;
};

void hauntRooms(struct Ghost *ghosts, int numGhosts) {
    for (int i = 0; i < numGhosts; i++) {
        printf("Ghost %s is haunting room %d!\n", ghosts[i].name, ghosts[i].roomNumber);
    }
}

// Implement the freeGhosts function 
void freeGhosts(struct Ghost * ghosts, int numGhosts) {

}

int main() {
    int numGhosts = 3;
    struct Ghost *ghosts = malloc(numGhosts * sizeof(struct Ghost));

    ghosts[0].name = malloc(20 * sizeof(char));
    strcpy(ghosts[0].name, "Spooky Sam");
    ghosts[0].roomNumber = 101;

    ghosts[1].name = malloc(20 * sizeof(char));
    strcpy(ghosts[1].name, "Creepy Cathy");
    ghosts[1].roomNumber = 202;

    ghosts[2].name = malloc(20 * sizeof(char));
    strcpy(ghosts[2].name, "Phantom Fred");
    ghosts[2].roomNumber = 303;

    hauntRooms(ghosts, numGhosts);


    freeGhosts(ghosts, numGhosts);

    return 0;
}