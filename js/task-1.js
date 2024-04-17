const item = document.querySelectorAll('.item');
const totalCategories = item.length;
console.log('Number of categories:', totalCategories);

item.forEach(item => {
  const headingElement = Array.from(item.querySelectorAll('h2')).map(
    h2 => h2.textContent
  );
  const listElement = Array.from(item.querySelectorAll('ul li')).map(
    li => li.textContent
  );
  console.log(`Category: ${headingElement}`);
  console.log(`Elements: ${listElement.length}`);
});
