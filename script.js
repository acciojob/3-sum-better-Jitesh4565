function threeSum(arr, target) {
// write your code here
	if(arr.length<3){
		return null;
	}
	nums.sort((a,b)=>a-b);

	let closestsum=Infinity;
	for(let i=0;i<arr.length-2;i++)
		{
			let left=i+1;
			let right=arr.length-1;

			while (left<right) 
			{
				const sum=nums[i]+nums[left]+nums[right];
	  if (Math.abs(sum - target) < Math.abs(closestSum - target)) 
	  {
		  
        closestSum = sum;
      }

        if(sum<target)
		{
			left++;
		}
			else if(sum>target)
			{
				right--;
			}
		 else
			{
			 return sum;
	         }
		}
		}
  return closestsum;
}

module.exports = threeSum;
