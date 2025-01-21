#include <stdio.h>

void writeIntegersToBinaryFile(const char *filename, int *numbers, int size) {
    FILE *file = fopen(filename, "wb");
    if (file == NULL) {
        perror("Error opening file for writing");
        return;
    }

    for (int i = 0; i < size; i++) {
        fwrite(&numbers[i], sizeof(int), 1, file);
    }
    fclose(file);
}


void readIntegersFromBinaryFile(const char *filename) {
    FILE *file = fopen(filename, "rb");
    if (file == NULL) {
        perror("Error opening file for reading");
        return;
    }

    fseek(file, 0, SEEK_END);
    long fileSize = ftell(file);
    int totalIntegers = fileSize / sizeof(int);
    int number;

    fseek(file, 0, SEEK_SET);

    for (int i = 0; i < totalIntegers; i++) {
        fread(&number, sizeof(int), 1, file);
        printf("%d\n", number);
    }

    fclose(file);
}

int main() {
    const char *filename = "numbers.bin";
    int numbers[5];

    for (int i = 0; i < 5; i++) {
        scanf("%d", &numbers[i]);
    }
    int size = sizeof(numbers) / sizeof(numbers[0]);

    writeIntegersToBinaryFile(filename, numbers, size);
    readIntegersFromBinaryFile(filename);

    return 0;
}