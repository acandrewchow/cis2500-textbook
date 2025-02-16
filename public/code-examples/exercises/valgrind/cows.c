#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Cow {
    char *name;
    int spaceshipNumber;
};

void abductCow(struct Cow *cow, const char *name, int spaceshipNumber) {
    cow->name = malloc(strlen(name) + 1); 
    strcpy(cow->name, name);
    cow->spaceshipNumber = spaceshipNumber;
}

void abductCows(struct Cow *cows, int numCows) {
    for (int i = 0; i < numCows; i++) {
        printf("Cow %s has been abducted by spaceship %d!\n", cows[i].name, cows[i].spaceshipNumber);
    }
}

// Implement the freeCows function
void freeCows(struct Cow *cows, int numCows) {

}

int main() {
    int numCows = 3;
    struct Cow *cows = malloc(numCows * sizeof(struct Cow));

    abductCow(&cows[0], "Betsy", 42);
    abductCow(&cows[1], "Mooana", 84);
    abductCow(&cows[2], "Milkshake", 126);

    abductCows(cows, numCows);


    freeCows(cows, numCows);

    return 0;
}