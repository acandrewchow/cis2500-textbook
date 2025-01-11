#include <stdio.h>

#define MAX_STUDENTS 3

struct Student {
    float gpa;
};

void sortStudents(struct Student students[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (students[j].gpa < students[j + 1].gpa) {
                struct Student temp = students[j];
                students[j] = students[j + 1];
                students[j + 1] = temp;
            }
        }
    }
}

int main() {
    struct Student students[MAX_STUDENTS];

    for (int i = 0; i < MAX_STUDENTS; i++) {
        scanf("%f", &students[i].gpa);
    }

    sortStudents(students, MAX_STUDENTS);

    for (int i = 0; i < MAX_STUDENTS; i++) {
        printf("%.1f ", students[i].gpa);
    }

    return 0;
}