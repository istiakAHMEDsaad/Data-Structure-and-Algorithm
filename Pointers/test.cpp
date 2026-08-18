#include <iostream>
using namespace std;

int main() {
    int a = 2;
    int *pA = &a;

    cout << "Core value: " << &a << endl
         << "pA: " << pA << endl
         << "value:" << *pA;

    return 0;
}