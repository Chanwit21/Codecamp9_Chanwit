// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม -6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้
const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const result1 = [...nums1,...nums2];
console.log(result1)
const result2 = [5,...nums1,-6,-1,...nums2];
console.log(result2)
const result3 = result2.reduce((acc,crr) => acc+crr,0 )
console.log(result3)