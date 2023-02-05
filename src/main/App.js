import '../assets/css/main.css';
import '../assets/css/fontawesome-all.min.css';



// Keeping this block around of an alternative-type implementation that frankly didn't work
// function highlightLink() {
// 	const sidebarLinks = document.querySelectorAll('#nav ul li a');
// 	for (let i = 0; i < sidebarLinks.length; i++) {
// 		let link = sidebarLinks[i];
// 		let previousLink = sidebarLinks[i];
// 		if (i-1>=0)
// 		{
// 			previousLink=sidebarLinks[i-1];
// 		}
// 		const linkRect = link.getBoundingClientRect();
// 		var bodyRect = document.body.getBoundingClientRect(),
// 		elemRect = link.getBoundingClientRect(),
// 		offset = elemRect.top - bodyRect.top;
// 		console.log("sidebarLinks.length: " + sidebarLinks.length)
// 		console.log("boundingBoxOffset: "+ offset +  " " + "offsetTop: " + link.offsetTop  +  " scrolly", window.scrollY +  " innerHeight", window.innerHeight+  " pageYoffest", window.pageYOffset )
// 		if (link.offsetTop < ( window.pageYOffset - window.innerHeight)) {
// 		  console.log("entered here");
// 		  link.classList.add('active');
// 		  if (i-1>=0)
// 		  {
// 			  previousLink.classList.remove('active')
// 		  }
// 		} 
// 		else {
// 			link.classList.remove('active');
// 		}	
// 	}
// }
// window.addEventListener('scroll', highlightLink);


const callback = (entries) => {
	const sidebarLinks = document.querySelectorAll('#nav ul li a');
	entries.forEach(entry => {
		if (entry.isIntersecting) {
		sidebarLinks.forEach(link => {
			if(link.textContent == entry.target.id)
			{
				link.classList.add('active');
			}
			if(link.textContent != entry.target.id)
			{
				link.classList.remove('active');
			}
		})
	  } else {
		entry.target.classList.remove('active');
	  }
	});
  };

function App(){
	const sidebarLinks2 = document.querySelectorAll('#main > section');
	let options = {
		// root: document.querySelector('#scrollArea'),
		rootMargin: '0px',
		threshold: 0.6
	  }
	let observer = new IntersectionObserver(callback, options);
	sidebarLinks2.forEach(link => observer.observe(link));
	return (
		<div></div>
	  );
}

export default App;
