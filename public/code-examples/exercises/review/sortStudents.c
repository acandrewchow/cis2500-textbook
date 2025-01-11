#include <stdio.h>

#define MAX_STUDENTS 3

struct Student {
    float gpa;
};

// TODO: Implement the sortStudents function
void sortStudents(struct Student students[], int n) {

}

// Do not modify main
int main() {
    struct Student students[MAX_STUDENTS];

    for (int i = 0; i < MAX_STUDENTS; i++) {
        scanf("%f", &students[i].gpa);
    }

    sortStudents(students, MAX_STUDENTS);

    for (int i = 0; i < MAX_STUDENTS; i++) {
        printf("%.1f\n", students[i].gpa);
    }

    return 0;
}