#include <iostream>
using namespace std;

void printItems(int val)
{
  for(int i=1; i<=val; i++){
    cout<<i<<endl;
  }

  for(int j=1; j<=val; j++){
    cout<<j<<endl;
  }
}

int main(){
  cout<<"We drop constant from time complexity"<<endl;
  printItems(5);
  return 0;
}