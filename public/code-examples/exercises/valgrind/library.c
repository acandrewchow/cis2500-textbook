#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char *title;
    char **chapters; 
    int chapterCount;
} Book;

typedef struct {
    char *name;
    Book *bookCollection;
    int bookCount;
} Library;

Library *createLibrary(const char *name, int bookCount, int chapters_per_book) {
    Library *library = (Library *)malloc(sizeof(Library)); 
    library->name = (char *)malloc(strlen(name) + 1); 
    strcpy(library->name, name); 

    library->bookCount = bookCount;
    library->bookCollection = (Book *)malloc(bookCount * sizeof(Book));

    for (int i = 0; i < bookCount; i++) {
        library->bookCollection[i].title = (char *)malloc(50 * sizeof(char)); 
        sprintf(library->bookCollection[i].title, "Book %d", i + 1); 

        library->bookCollection[i].chapterCount = chapters_per_book;
        library->bookCollection[i].chapters = (char **)malloc(chapters_per_book * sizeof(char *)); 

        for (int j = 0; j < chapters_per_book; j++) {
            library->bookCollection[i].chapters[j] = (char *)malloc(100 * sizeof(char)); 
            sprintf(library->bookCollection[i].chapters[j], "Chapter %d.%d", i + 1, j + 1); 
        }
    }

    return library; 
}

void printLibrary(Library *library) {
    printf("Library: %s\n", library->name);
    for (int i = 0; i < library->bookCount; i++) {
        printf("  Book: %s\n", library->bookCollection[i].title);
        for (int j = 0; j < library->bookCollection[i].chapterCount; j++) {
            printf("    Chapter: %s\n", library->bookCollection[i].chapters[j]);
        }
    }
}

// Implement the freeLibrary function that frees all memory allocated by the createLibrary function
void freeLibrary(Library *library) {
            
}

int main() {
    Library *library = createLibrary("City Library", 3, 5); 
    printLibrary(library);

    freeLibrary(library); 
    return 0;
}



