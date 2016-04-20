<html>
<head>
	<title></title>
</head>
<body>
<p>// JavaScript Document</p>

<p>// Variables - use camelCase names<br />
var slides = document.getElementsByClassName(&#39;picture&#39;), // document.querySelectorAll(&#39;.picture .image p&#39;)<br />
&nbsp;&nbsp; &nbsp;arrows = document.getElementsByClassName(&#39;arrow&#39;),<br />
&nbsp;&nbsp; &nbsp;duration = 10000,<br />
&nbsp;&nbsp; &nbsp;numberOfSlides = slides.length, // 4<br />
&nbsp;&nbsp; &nbsp;i = 1,<br />
&nbsp;&nbsp; &nbsp;timeout;</p>

<p>slide();</p>

<p>arrows[0].addEventListener(&#39;click&#39;, backward);<br />
arrows[1].addEventListener(&#39;click&#39;, next);</p>

<p>// Function, does something<br />
function slide() {<br />
&nbsp;&nbsp; &nbsp;timeout = setTimeout(function() {<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;moveForward();<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;slide();<br />
&nbsp;&nbsp; &nbsp;}, duration);<br />
}</p>

<p>function previous() {</p>

<p>}</p>

<p>function backward() {<br />
&nbsp;&nbsp; &nbsp;clearTimeout(timeout);<br />
&nbsp;&nbsp; &nbsp;moveBackward();<br />
&nbsp;&nbsp; &nbsp;slide();<br />
}</p>

<p>function next() {<br />
&nbsp;&nbsp; &nbsp;clearTimeout(timeout);<br />
&nbsp;&nbsp; &nbsp;moveForward();<br />
&nbsp;&nbsp; &nbsp;slide();<br />
}</p>

<p>function addClass(el, className) {<br />
&nbsp;&nbsp; &nbsp;if (el.className.indexOf(className) === -1) {<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;el.className += &#39; &#39; + className;<br />
&nbsp;&nbsp; &nbsp;}<br />
}</p>

<p>function removeClass(el, className) {<br />
&nbsp;&nbsp; &nbsp;el.className = el.className.replace(className, &#39;&#39;).replace(&#39;&nbsp; &#39;, &#39; &#39;);<br />
}</p>

<p>function getPreviousIndex() {<br />
&nbsp;&nbsp; &nbsp;if (i === 0) {<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;i = slides.length - 1;<br />
&nbsp;&nbsp; &nbsp;} else {<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;i -= 1;<br />
&nbsp;&nbsp; &nbsp;}<br />
}</p>

<p>function getNextIndex() {<br />
&nbsp;&nbsp; &nbsp;<br />
&nbsp;&nbsp; &nbsp;// Get new &quot;i&quot;<br />
&nbsp;&nbsp; &nbsp;// i = i % (slides.length - 1);<br />
&nbsp;&nbsp; &nbsp;if (i &gt;= slides.length - 1) {<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;i = 0;<br />
&nbsp;&nbsp; &nbsp;} else {<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;i += 1;<br />
&nbsp;&nbsp; &nbsp;}<br />
}</p>

<p>function getCurrentSlide() {<br />
&nbsp;&nbsp; &nbsp;return slides[ i ];<br />
}</p>

<p>function getPreviousSlide() {<br />
&nbsp;&nbsp; &nbsp;getPreviousIndex();<br />
&nbsp;&nbsp; &nbsp;return slides[ i ];<br />
}</p>

<p>function getNextSlide() {<br />
&nbsp;&nbsp; &nbsp;getNextIndex();<br />
&nbsp;&nbsp; &nbsp;return slides[ i ];<br />
}</p>

<p>function moveBackward() {<br />
&nbsp;&nbsp; &nbsp;var currentSlide = getCurrentSlide(),<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;nextSlide = getPreviousSlide(),<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;prevSlide = slides[ i - 1 ] || slides[ slides.length - 1 ]</p>

<p>&nbsp;&nbsp; &nbsp;// Move current slide left<br />
&nbsp;&nbsp; &nbsp;// Move next slide into view<br />
&nbsp;&nbsp; &nbsp;addClass(currentSlide, &#39;transition&#39;);<br />
&nbsp;&nbsp; &nbsp;addClass(nextSlide, &#39;transition&#39;);<br />
&nbsp;&nbsp; &nbsp;addClass(currentSlide, &#39;right&#39;);<br />
&nbsp;&nbsp; &nbsp;removeClass(nextSlide, &#39;left&#39;);</p>

<p>&nbsp;&nbsp; &nbsp;removeClass(prevSlide, &#39;transition&#39;);<br />
&nbsp;&nbsp; &nbsp;addClass(prevSlide, &#39;left&#39;);<br />
&nbsp;&nbsp; &nbsp;removeClass(prevSlide, &#39;right&#39;);<br />
}</p>

<p>function moveForward() {<br />
&nbsp;&nbsp; &nbsp;var prevSlide = slides[ i - 1 ] || slides[ slides.length - 1 ],<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;currentSlide = getCurrentSlide(),<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;nextSlide = getNextSlide(),<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;prevSlide;</p>

<p>&nbsp;&nbsp; &nbsp;// Move current slide left<br />
&nbsp;&nbsp; &nbsp;// Move next slide into view<br />
&nbsp;&nbsp; &nbsp;addClass(currentSlide, &#39;transition&#39;);<br />
&nbsp;&nbsp; &nbsp;addClass(nextSlide, &#39;transition&#39;);<br />
&nbsp;&nbsp; &nbsp;addClass(currentSlide, &#39;left&#39;);<br />
&nbsp;&nbsp; &nbsp;removeClass(nextSlide, &#39;right&#39;);</p>

<p><br />
&nbsp;&nbsp; &nbsp;removeClass(prevSlide, &#39;transition&#39;);<br />
&nbsp;&nbsp; &nbsp;addClass(prevSlide, &#39;right&#39;);<br />
&nbsp;&nbsp; &nbsp;removeClass(prevSlide, &#39;left&#39;);<br />
}</p>
</body>
</html>
