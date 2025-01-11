#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 3

struct Student {
    char name[50];
    int age;
    float gpa;
};

// TODO: Implement the findTopStudent function
struct Student findTopStudent(struct Student students[], int n) {

}

// Do not modify main
int main() {
    struct Student students[MAX_STUDENTS];

    scanf("%f", &students[0].gpa);
    scanf("%f", &students[1].gpa);
    scanf("%f", &students[2].gpa);

    struct Student topStudent = findTopStudent(students, MAX_STUDENTS);

    printf("%.1f\n", topStudent.gpa);

    return 0;
}