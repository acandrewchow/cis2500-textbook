#include <stdio.h>

void writeIntegersToBinaryFile(const char *fileName, int *numbers, int count) {
    FILE *file = fopen(fileName, "wb");
    if (file == NULL) {
        perror("Error opening file");
        return;
    }

    for (int i = 0; i < count; i++) {
        if (fwrite(&numbers[i], sizeof(int), 1, file) == 1) {
            printf("%d\n", numbers[i]);
        } else {
            perror("Error writing to file");
            break;
        }
    }

    fclose(file);
}

int main() {
    int numbers[5];

    for (int i = 0; i < 5; i++) {
        scanf("%d", &numbers[i]);
    }

    writeIntegersToBinaryFile("data.bin", numbers, 5);

    return 0;
}