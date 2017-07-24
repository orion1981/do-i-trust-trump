import React from 'react'

export default class GameSetupContainer extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
    <html>
<head>
<title>Do you trust Trump? Separate truth from lie with our quick quiz.</title>



	<script src="https://use.typekit.net/vta0yrk.js"></script>






	<link rel="icon" type="image/png" href="images/fav_icon.png" />



	<script src="https://code.jquery.com/jquery-3.1.1.min.js"
			  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
			  crossorigin="anonymous"></script>

	<script src="scripts.js"></script>





</head>

<body>

<div class="content_wrapper">

<div class="home">

	<div class="photo"></div>

	<div class="content_area">

		<div>

			<div class="headline">
				Who do<span class="headline_break"><br/></span> you trust?
			</div>

			<div class="intro">
				In the midst of so much controversy, it can be hard to tell who is telling the truth. We help you decide what you believe, using the sources <b>you trust.</b>
			</div>

		</div>

		<div class="divider"></div>



		<form id="survey_start" class="survey">

			<div class="survey_headline">How much do you trust Trump?</div><br/>

			<div class="choice"><input type="radio" name="trust_trump" value="1"/> Not all all</div>
			<div class="choice"><input type="radio" name="trust_trump" value="2"/> A little</div>
			<div class="choice"><input type="radio" name="trust_trump" value="3"/> Somewhat</div>
			<div class="choice"><input type="radio" name="trust_trump" value="4"/> A lot</div>
			<div class="choice"><input type="radio" name="trust_trump" value="5"/> Almost always</div>


		</form>



		<form id="sources">

		<div class="select_sources_headline">Select the sources of information that you generally trust:</div>




			<div class="source_columns">

				<div class="government">

					<div class="heading">Government</div>

					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>
					<input type="checkbox" name="fbi" value="fbi" id="fbi"/><label for="fbi"> Federal Bureau of Investigation</label><br/>

				</div>

				<div class="media">

					<div class="heading">Media</div>

					<input type="checkbox" name="newyorktimes" value="newyorktimes" id="newyorktimes"/><label for="newyorktimes"> New York Times</label><br/>
					<input type="checkbox" name="newyorktimes" value="newyorktimes" id="newyorktimes"/><label for="newyorktimes"> New York Times</label><br/>
					<input type="checkbox" name="newyorktimes" value="newyorktimes" id="newyorktimes"/><label for="newyorktimes"> New York Times</label><br/>
					<input type="checkbox" name="newyorktimes" value="newyorktimes" id="newyorktimes"/><label for="newyorktimes"> New York Times</label><br/>
					<input type="checkbox" name="newyorktimes" value="newyorktimes" id="newyorktimes"/><label for="newyorktimes"> New York Times</label><br/>
					<input type="checkbox" name="newyorktimes" value="newyorktimes" id="newyorktimes"/><label for="newyorktimes"> New York Times</label><br/>
					<input type="checkbox" name="newyorktimes" value="newyorktimes" id="newyorktimes"/><label for="newyorktimes"> New York Times</label><br/>
					<input type="checkbox" name="newyorktimes" value="newyorktimes" id="newyorktimes"/><label for="newyorktimes"> New York Times</label><br/>

				</div>

				<div class="other">

					<div class="heading">Other</div>

					<input type="checkbox" name="nielsen" value="nielsen" id="nielsen"/><label for="nielsen"> Neilsen Television Ratings</label><br/>
					<input type="checkbox" name="nielsen" value="nielsen" id="nielsen"/><label for="nielsen"> Neilsen Television Ratings</label><br/>
					<input type="checkbox" name="nielsen" value="nielsen" id="nielsen"/><label for="nielsen"> Neilsen Television Ratings</label><br/>
					<input type="checkbox" name="nielsen" value="nielsen" id="nielsen"/><label for="nielsen"> Neilsen Television Ratings</label><br/>
					<input type="checkbox" name="nielsen" value="nielsen" id="nielsen"/><label for="nielsen"> Neilsen Television Ratings</label><br/>
					<input type="checkbox" name="nielsen" value="nielsen" id="nielsen"/><label for="nielsen"> Neilsen Television Ratings</label><br/>
					<input type="checkbox" name="nielsen" value="nielsen" id="nielsen"/><label for="nielsen"> Neilsen Television Ratings</label><br/>
					<input type="checkbox" name="nielsen" value="nielsen" id="nielsen"/><label for="nielsen"> Neilsen Television Ratings</label><br/>




				</div>

			</div>

			<div class="warning">You must select 1 or 2 additional sources in order to proceed.</div>


			<input type="submit" value="Get Started" class="get_started"/>


		</form>


	</div>


</div>





</div>

<div class="footer">

	<a href="https://www.facebook.com/sharer/sharer.php?u=http://doitrusttrump.com"><img src="images/facebook.png" alt="share on facebook" />Share on Facebook</a>
	<a href="https://twitter.com/home?status=Should%20you%20trust%20@realDonaldTrump%20or%20is%20it%20all%20%23fakenews?%20DoITrustTrump.com%20helps%20you%20decide%20pic.twitter.com/LWwY8tK0Gr"><img src="images/twitter.png" alt="share on twitter" />Share on Twitter</a>

</div>





</body>
</html>
)
  }
}
