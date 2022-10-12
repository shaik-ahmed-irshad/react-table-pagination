// Binary Search


// Without recursion
array = [1,22,35,44,55,66,77,88]
target = 66

// giving Array and Element to be searched as parameter 
function Binary_search (arr,n){
  // setting indexes  
  start_index = 0
  end_index = (arr.length-1)

  // a loop until the value is found or the left bounder/index is equal to higher the right bounder/index.

  while (start_index <= end_index){ 

    // calc mid-element of the list.
    mid_index = Math.floor((start_index+end_index)/2) 

    // If the search value is equal to the mid value, return the middle index.
      if (arr[mid_index] == n ){
          return `target found at Index '${mid_index}'`
      }

    // If the searched value is lower than the mid value, set a new right index.
      if (arr[mid_index]>n){ 
          end_index = mid_index -1 
          
      }
    // If the searched value is higher than the mid value, set a new left index.
      else{
          start_index = mid_index + 1
      }
  }

  // If no element found return not found
  return 'target not found / not in array'
}
console.log(Binary_search(array,target))

//______________________________________________________

// With recursion
a = [1,22,35,44,55,66,77,88]
n = 660
// setting indexes  
start_index = 0
end_index = (a.length-1)
  
  // adding Start and End index to parameters with Array and Element to be found so function can be called with them 
  function r_Binary_search (a,n,start_index,end_index){

        mid_index = Math.floor((start_index+end_index)/2) 

        if (a[mid_index] == n ){
            return`target found at Index '${mid_index}'`
        }
        else if (a[mid_index]>n){ 
            end_index = mid_index -1
        }
        else{
            start_index = mid_index + 1
        }
        // same steps as non reccursive, just returning the updated values of indexes as arguments and calling the same function instead of looping it.
        return r_Binary_search(a,n,start_index,end_index) 
}
  console.log(r_Binary_search(a,n,start_index,end_index))