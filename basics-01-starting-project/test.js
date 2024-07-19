let name = [1,3,4,2,5];
console.log(binarySearch(name,5));
function binarySearch(arr, num){
    let l=0;
    let h=arr.length;
    while(l<h){
        let mid = (l+h)/2;
        console.log(mid);
        if(arr[mid]==num){
            return mid;
        }
        else if(arr[mid]<num){
            l=mid+1;
        }
        else if(arr[mid]>num){
            h=mid-1;
        }
    }
    return 0;
}