const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS

// Sample list of dares
const dares = [
  "Take a picture with your favorite book!",
  "Show off your best dance move!",
  "Take a photo with something that makes you laugh!",
  "Pretend you're a famous athlete and snap a picture while 'winning'!",
  "Post a picture of your favorite snack!",
  "Take a picture in your best outfit!",
  "Capture a picture of your pet doing something silly!",
  "Do a funny face and take a selfie!",
  "Take a picture of your favorite place to relax!",
  "Post a picture of something that inspires you!",
  "Snap a picture of yourself in nature!",
  "Show your breakfast in a creative way!",
  "Take a picture of your workspace!",
  "Capture a moment of you doing a hobby!",
  "Take a picture with a friend doing something fun!",
  "Show off your artistic side and draw something!",
  "Take a selfie with a stranger (with their permission)!",
  "Capture a picture of your favorite movie scene recreated!",
  "Take a picture wearing a funny hat!",
  "Show off your favorite shoes with a cool pose!",
  "Capture a moment of you helping someone!",
  "Post a picture of a childhood memory!",
  "Show off your coolest collection!",
  "Take a picture of your favorite workout move!",
  "Capture a moment of you dancing in public!",
  "Post a picture of you making a funny face in front of a mirror!",
  "Show your favorite book and a quote from it!",
  "Take a picture of you in front of a landmark!",
  "Capture a moment of you doing something nice for someone!",
  "Take a picture of your favorite childhood toy!",
  "Show your favorite video game character in a creative way!",
  "Take a picture of you cooking something new!",
  "Post a picture of your favorite flower or plant!",
  "Capture a moment of you reading in a cozy spot!",
  "Take a picture of you trying a new hairstyle!",
  "Show off your art skills with a quick sketch!",
  "Capture a funny moment with family or friends!",
  "Take a picture of something you built or crafted!",
  "Show your favorite ice cream flavor with a creative photo!",
  "Capture a moment of you enjoying the outdoors!",
  "Take a picture of you doing a funny pose!",
  "Post a picture of your favorite holiday decoration!",
  "Show off your musical talent in a picture!",
  "Take a selfie with a funny background!",
  "Capture a moment of you volunteering or helping out!",
  "Take a picture of your favorite view!",
  "Show off your latest DIY project with a photo!",
  "Capture a moment of you and your friends being silly!",
  "Take a picture of your favorite pizza toppings!",
  "Show a snapshot of a beautiful sunset!",
  "Capture a moment of you learning something new!",
  "Take a picture of your favorite coffee or tea!",
  "Show off your best dance move!",
  "Capture a moment of you making a new recipe!",
  "Take a picture of your favorite board game night!",
  "Show your favorite gadget and why you love it!",
  "Capture a moment of you enjoying a rainy day!",
  "Take a picture of a cute animal you encounter!",
  "Post a picture of something that represents your personality!",
  "Show off your workout gear in a cool pose!",
  "Capture a moment of you doing something spontaneous!",
  "Take a picture of your favorite childhood snack!",
  "Show off your gaming setup with a photo!",
  "Capture a moment of you enjoying your favorite show!",
  "Take a picture of your favorite dessert!",
  "Show off your favorite place in your city!",
  "Capture a moment of you exploring a new area!",
  "Take a picture of something that represents your culture!",
  "Show off your favorite outdoor activity!",
  "Capture a moment of you and your family enjoying time together!",
  "Take a picture of you trying on a funny outfit!",
  "Show your favorite childhood memory through a picture!",
  "Capture a moment of you playing a sport!",
  "Take a picture of something you are grateful for!",
  "Show off your favorite local restaurant!",
  "Capture a moment of you celebrating a special occasion!",
  "Take a picture of something you love to collect!",
  "Show off your latest purchase with a creative photo!",
  "Capture a moment of you relaxing with a book!",
  "Take a picture of your favorite childhood game!",
  "Show your artistic side with a unique creation!",
  "Capture a moment of you enjoying your favorite hobby!",
  "Take a picture of you trying something new for the first time!",
  "Show off your favorite plant or garden!",
  "Capture a moment of you enjoying a festival or event!",
  "Take a picture of something that makes you happy!",
  "Show your favorite activity with a friend!",
  "Capture a moment of you doing something challenging!",
  "Take a picture of you trying a new type of food!",
  "Show off your coolest travel photo!",
  "Capture a moment of you and your pets playing!",
  "Take a picture of something you built with your hands!",
  "Show your favorite thing to do on a weekend!",
  "Capture a moment of you enjoying the first snow!",
  "Take a picture of you having fun with a DIY project!",
  "Show off your favorite piece of art!",
  "Capture a moment of you having a picnic!",
  "Take a picture of your favorite toy as a child!",
  "Show off your latest hairstyle or makeup look!",
  "Capture a moment of you enjoying your favorite music!",
  "Take a picture of something that makes you feel cozy!",
  "Show your favorite place to hang out with friends!",
  "Capture a moment of you doing something silly!",
  "Take a picture of your favorite dessert from childhood!",
  "Show off your latest achievement with a photo!",
  "Capture a moment of you doing a random act of kindness!",
  "Take a picture of you and your favorite game!",
  "Show off your best travel photo!",
  "Capture a moment of you playing a musical instrument!",
  "Take a picture of something that represents your goals!",
  "Show your favorite way to unwind!",
  "Capture a moment of you and your family cooking together!",
  "Take a picture of your favorite book cover!",
  "Show off your favorite costume from a past event!",
  "Capture a moment of you making a difference in your community!",
  "Take a picture of your favorite art supply!",
  "Show your favorite way to stay active!",
  "Capture a moment of you sharing a laugh with someone!",
  "Take a picture of you and your favorite gadget!",
  "Show off your best photo from a recent trip!",
  "Capture a moment of you enjoying nature!",
  "Take a picture of your favorite drink!",
  "Show off your creative side with a unique craft!",
  "Capture a moment of you being adventurous!",
  "Take a picture of something you love in your room!",
  "Show your favorite way to relax after a long day!",
  "Capture a moment of you enjoying time with friends!",
  "Take a picture of something that reminds you of home!",
  "Show off your best group photo!",
  "Capture a moment of you doing something for yourself!",
  "Take a picture of something you love to do!",
  "Show your favorite way to celebrate!",
  "Capture a moment of you having fun in the rain!",
  "Take a picture of your favorite local hangout spot!",
  "Show off your coolest fashion choice!",
  "Capture a moment of you enjoying a good meal!",
  "Take a picture of something that brings you joy!",
];

// Endpoint to get a random dare
app.get('/daily-dare', (req, res) => {
  const randomDare = dares[Math.floor(Math.random() * dares.length)];
  res.status(200).json({ dare: randomDare });
});

// Export the app for Vercel
module.exports = app;
