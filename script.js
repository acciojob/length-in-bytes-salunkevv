const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str]).size;
	return blob;
};
// Do not change the code below

const str = prompt("Enter some string.");
alert(byteSize(str));