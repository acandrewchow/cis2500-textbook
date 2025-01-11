#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 3

struct Student {
    char name[50];
    int age;
    float gpa;
};

struct Student findTopStudent(struct Student students[], int n) {
    struct Student topStudent = students[0];

    for (int i = 1; i < n; i++) {
        if (students[i].gpa > topStudent.gpa) {
            topStudent = students[i];
        }
    }

    return topStudent;
}

int main() {
    struct Student students[MAX_STUDENTS];

    scanf("%f", &students[0].gpa);
    scanf("%f", &students[1].gpa);
    scanf("%f", &students[2].gpa);

    struct Student topStudent = findTopStudent(students, MAX_STUDENTS);

    printf("%.1f\n", topStudent.gpa);

    return 0;
}