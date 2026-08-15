#include <iostream>

using namespace std;

void prtinItems(int val){
    for(int i=1; i<=val; i++){
        cout<<i<<endl;
    }
}

int main(){
    prtinItems(10);
    return 0;
}