import {ImageAndIconResources} from '../Exporter/ImageExporter';

export const english = {
  // login
  Login: 'Login',
  Country: 'Country',
  Mobile: 'Mobile Number',
  Password: 'Password',
  Forgot: 'Forgot Password?',
  dontHaveAccount: "Don't have an account?",
  signupWithEmail: 'Sign up with email',
  //   signup

  AddYourProfilePicture: 'Add your profile picture',
  makeITEasy: 'Make it easy for your friends to find you on serendipity',
  signUP: 'Sign up',
  fname: 'First name',
  lname: 'Last name',
  sCountry: 'Select country',
  sGender: 'Select Gender',
  sAge: 'Select your age',
  email: 'Email address',
  cEamil: 'Confirm Email address',
  createPasword: 'Create pasword',
  checkBoxForSignup: {
    pleaseCheck: 'Please check the box to agree to our',
    TOS: 'Terms of Service,',
    Mobile: 'Mobile App End User License Agreement &',
    PP: 'Privacy Policy.',
  },
  next: 'Next',

  //   welcome
  createAccount: 'Create Account',
  chancesEncounters: 'Chance encounters are a thing of the past',
  checkBoxForWelcome: {
    pleaseCheck: 'Please check the box to agree to our',
    TOS: 'Terms of Service,',
    Mobile: 'Mobile App End User License Agreement &',
    PP: 'Privacy Policy',
    CP: 'Cookies Policy.',
  },
  paywall: {
    screenTitle: 'All-Access Premium',
    minAgo: 'min ago',
    month: 'month',
    quarter: 'quarter',
    year: 'year',
    BV: 'BEST VALUE!',
    sevenDaysTrail: '7-day free trial. Then $289 a year Cancel anytime.',
    startFreeTrial: 'Start Free Trial',
    purchaseRestore: 'Restore Purchase',
    PaidFacilities: [
      {
        imgUrl: require('../Assets/Images/paywall_1.jpg'),
        heading: 'Unlimited Arrival/Departure Notifications of Places',
        subHeading:
          'You can designate any locations you want such a schools, work or home and get instant notifications as soon as the connections you are tracking arrive and depart from that location',
        notificationSubHeading: 'Sammy has departed from Home.',
      },
      {
        imgUrl: require('../Assets/Images/car.jpg'),
        heading:
          "Track Users by Viewing Your Connection's Direction, Speed & Mode of Travel",
        subHeading:
          'View details of your connections like their direction, speed, mode of travel and a street view of their location as well as their chosen battery setting',
        notificationSubHeading: '',
      },
      {
        imgUrl: require('../Assets/Images/car.jpg'),
        heading: 'Never Miss a Connection Again with Nearby Alerts',
        subHeading:
          "Get Notified When Your're 2nd & 3rd Degree Connections are Nearby (Everything in Alert Settings Is only for Premium) combine this with family and friend notifications and serendipitous encounters",
        notificationSubHeading: 'Wang is within 15 meters of your lcoation',
      },
      {
        imgUrl: require('../Assets/Images/car.jpg'),
        heading: 'Route History for 90 Days',
        subHeading:
          'View the daily routes traveled by your connections who have allowed you to track them and get details like the exact time they left, all their stops, their speed of travel and duration of each trip for the past 90 days',
        notificationSubHeading: '',
      },
      {
        imgUrl: require('../Assets/Images/car.jpg'),
        heading: 'Intelligent Alerts',
        subHeading:
          'Turn on Intelligent Notifications to prevent repetitive alerts for the same people in the same location at the same time each day',
        notificationSubHeading: '',
        isIcon: true,
      },
    ],
  },
  trackingScreens: {
    manage_connections_im_tracking: {
      screenTitle: "Manage Connections I'm Tracking",
      view90Days: 'View 90 Days Route History',
      notifications: 'Notifications',
      data: [
        {
          image: ImageAndIconResources.person3,
          name: 'Loreena Sandeman',
          designation: 'Designer',
          address: '123 Bedford Ave Woodbury, CO',
        },
        {
          image: ImageAndIconResources.person2,
          name: 'Harry Sandeman',
          designation: 'Developer',
          address: '123 Bedford Eve Woodbury,AUS',
        },
      ],
    },
    Tracking_History: {
      screenTitle: 'Tracking History',
      view90Days: 'View 90 Days Route History',
      data: [
        {
          image: ImageAndIconResources.person3,
          name: 'Loreena Sandeman',
          designation: 'Designer',
          address: '123 Bedford Ave Woodbury, CO',
          daysAgo: 20,
        },
        {
          image: ImageAndIconResources.person2,
          name: 'Harry Sandeman',
          designation: 'Developer',
          address: '123 Bedford Eve Woodbury,AUS',
          daysAgo: 5,
        },
      ],
    },
  },
};

export const hindi = {
  // login
  signUP: 'साइन अप करें',
  Login: 'लॉग इन करें',
  Country: 'देश',
  Mobile: 'मोबाइल नंबर',
  Password: 'पासवर्ड',
  Forgot: 'पासवर्ड भूल गए?',
  dontHaveAccount: 'खाता नहीं है?',
  signupWithEmail: 'ईमेल का उपयोग करके साइन अप करें',
  AddYourProfilePicture: 'अपना प्रोफ़ाइल चित्र जोड़ें',
  makeITEasy: 'Serendipity पर अपने दोस्तों के लिए आपको ढूंढना आसान बनाएं',

  //   signup
  fname: 'प्रथम नाम',
  lname: 'उपनाम',
  sCountry: 'देश चुनें',
  sGender: 'लिंग चुनें',
  sAge: 'अपनी आयु का चयन करें',
  email: 'ईमेल',
  cEamil: 'ईमेल पते की पुष्टि करें',
  createPasword: 'पासवर्ड बनाएं',
  checkBoxForSignup: {
    pleaseCheck: 'कृपया हमारे से सहमत होने के लिए बॉक्स को चेक करें',
    TOS: 'सेवा की शर्तें,',
    Mobile: 'मोबाइल ऐप एंड यूज़र लाइसेंस एग्रीमेंट और',
    PP: 'गोपनीयता नीति और',
  },
  next: 'अगला',

  //   welcome
  createAccount: 'खाता बनाएं',
  chancesEncounters: 'मौका मुठभेड़ अतीत की बात है',
  checkBoxForWelcome: {
    pleaseCheck: 'कृपया हमारे से सहमत होने के लिए बॉक्स को चेक करें',
    TOS: 'सेवा की शर्तें,',
    Mobile: 'मोबाइल ऐप एंड यूज़र लाइसेंस एग्रीमेंट और',
    PP: 'गोपनीयता नीति और',
    CP: 'कुकीज़ नीति।',
  },
  paywall: {
    screenTitle: 'ऑल-एक्सेस प्रीमियम',
    minAgo: 'मिनट पहले',
    month: 'माह',
    quarter: 'त्रिमास',
    year: 'साल',
    BV: 'सबसे अच्छा मूल्य!',
    sevenDaysTrail:
      '7-दिन का निःशुल्क परीक्षण। फिर $289 प्रति वर्ष कभी भी रद्द करें।',
    startFreeTrial: 'निशुल्क आजमाइश शुरु करें',
    purchaseRestore: 'पुनःस्थापन क्रय',
    PaidFacilities: [
      {
        imgUrl: require('../Assets/Images/paywall_1.jpg'),
        heading: 'स्थानों के असीमित आगमन/प्रस्थान सूचनाएं',
        subHeading:
          'आप किसी भी ऐसे स्थान को नामित कर सकते हैं जिसे आप स्कूल, काम या घर चाहते हैं और जैसे ही आप ट्रैक कर रहे हैं, उस स्थान से आने और जाने के लिए तत्काल सूचनाएं प्राप्त करें।',
        notificationSubHeading: 'सैमी घर से विदा हो गया है|',
      },
      {
        imgUrl: require('../Assets/Images/car.jpg'),
        heading:
          'अपने कनेक्शन की दिशा, गति और यात्रा के तरीके को देखकर उपयोगकर्ताओं को ट्रैक करें',
        subHeading:
          'अपने कनेक्शन का विवरण देखें जैसे उनकी दिशा, गति, यात्रा का तरीका और उनके स्थान का सड़क दृश्य और साथ ही उनकी चुनी हुई बैटरी सेटिंग',
        notificationSubHeading: '',
      },
      {
        imgUrl: require('../Assets/Images/car.jpg'),
        heading: 'आस-पास के अलर्ट के साथ फिर कभी कोई कनेक्शन न छूटे',
        subHeading:
          'जब आपके दूसरे और तीसरे डिग्री के कनेक्शन पास हों तो सूचित करें (अलर्ट सेटिंग्स में सब कुछ केवल प्रीमियम के लिए है) इसे परिवार और मित्र सूचनाओं और आकस्मिक मुठभेड़ों के साथ संयोजित करें',
        notificationSubHeading: 'वैंग आपके स्थान के 15 मीटर के दायरे में है',
      },
      {
        imgUrl: require('../Assets/Images/car.jpg'),
        heading: '90 दिनों के लिए मार्ग इतिहास',
        subHeading:
          'अपने कनेक्शन द्वारा यात्रा किए गए दैनिक मार्गों को देखें जिन्होंने आपको उन्हें ट्रैक करने की अनुमति दी है और पिछले 90 दिनों के लिए उनके द्वारा छोड़े गए सटीक समय, उनके सभी स्टॉप, उनकी यात्रा की गति और प्रत्येक यात्रा की अवधि जैसे विवरण प्राप्त करें।',
        notificationSubHeading: '',
      },
      {
        imgUrl: require('../Assets/Images/car.jpg'),
        heading: 'बुद्धिमान अलर्ट',
        subHeading:
          'प्रत्येक दिन एक ही समय पर एक ही स्थान पर समान लोगों के लिए दोहराए जाने वाले अलर्ट को रोकने के लिए इंटेलिजेंट नोटिफिकेशन चालू करें',
        notificationSubHeading: '',
        isIcon: true,
      },
    ],
  },
  trackingScreens: {
    manage_connections_im_tracking: {
      screenTitle: 'मैं जिन कनेक्शनों को ट्रैक कर रहा हूं उन्हें प्रबंधित करें',
      view90Days: '90 दिनों का मार्ग इतिहास देखें',
      notifications: 'सूचनाएं',
      data: [
        {
          image: ImageAndIconResources.person3,
          name: 'लोरेना सैंडमैन',
          designation: 'डिजाइनर',
          address: '123 बेडफोर्ड एवेन्यू वुडबरी, सीओ',
        },
        {
          image: ImageAndIconResources.person2,
          name: 'हैरी सैंडमैन',
          designation: 'डेवलपर',
          address: '123 बेडफोर्ड ईव वुडबरी, ऑस्ट्रेलिया',
        },
      ],
    },
    Tracking_History: {
      screenTitle: 'ट्रैकिंग इतिहास',
      view90Days: '90 दिनों का मार्ग इतिहास देखें',
      data: [
        {
          image: ImageAndIconResources.person3,
          name: 'लोरेना सैंडमैन',
          address: '123 बेडफोर्ड एवेन्यू वुडबरी, सीओ',
          daysAgo: 20,
        },
        {
          image: ImageAndIconResources.person2,
          name: 'हैरी सैंडमैन',
          address: '123 बेडफोर्ड ईव वुडबरी, ऑस्ट्रेलिया',
          daysAgo: 5,
        },
      ],
    },
  },
};
