const categoryList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoryList.length);

categoryList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName} \nElements: ${elementsCount}`);
});
