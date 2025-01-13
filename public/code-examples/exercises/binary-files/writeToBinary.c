#include <stdio.h>


// TODO: Implement the writeIntegersToBinaryFile function
void writeIntegersToBinaryFile(const char *fileName, int *numbers, int count) {

}

// Do not modify main
int main() {
    int numbers[5];

    for (int i = 0; i < 5; i++) {
        scanf("%d", &numbers[i]);
    }

    writeIntegersToBinaryFile("data.bin", numbers, 5);

    return 0;
}