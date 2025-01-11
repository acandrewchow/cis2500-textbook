#include <stdio.h>
#include <stdlib.h>

#define SIZE 5  

int findClosestToAverage(int arr[], int n) {
    int sum = 0;
    
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    float average = (float) sum / n;
    
    int closest = arr[0];
    float minDiff = abs(arr[0] - average);
    
    for (int i = 1; i < n; i++) {
        float diff = abs(arr[i] - average);
        if (diff < minDiff) {
            closest = arr[i];
            minDiff = diff;
        } else if (diff == minDiff && arr[i] < closest) {
            closest = arr[i];
        }
    }
    
    return closest;
}

int main() {
    int arr[SIZE];
    
    for (int i = 0; i < SIZE; i++) {
        scanf("%d", &arr[i]);
    }
    
    int closest = findClosestToAverage(arr, SIZE);
    printf("%d\n", closest);
    
    return 0;
}