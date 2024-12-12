import { Board1, Board2, Board3, Gradient, HatGirl, HatGirl2, Person1, Person2, Req1, Req3, Req4, Req5, small_Thumbnail2, small_Thumbnail3 } from "../../assets";
import { BLUE, TRANSPARENT } from "../colors";

export const OnBoardData = [
  {
    id: 1,
    title: "Welcome to Matrimonial App",
    description: "Love begins here—your journey to forever starts now!",
    BackgroundImage: Board1,
    DarkShad: Gradient,

  },
  {
    id: 2,
    title: "100% Verified Profiles",
    description: "Love begins here—your journey to forever starts now!",
    BackgroundImage: Board2,
    DarkShad: Gradient,

  },
  {
    id: 3,
    title: "Welcome to Matrimonial App",
    description: "Love begins here—your journey to forever starts now!",
    BackgroundImage: Board3,
    DarkShad: Gradient,

  },
];

export const ImagesList = [Req5, Req1, Req3, Req5];
export const PendingNumber = [Req1, Req3, Req4, Req5];


export const MessageArray = [
  {
    name: "Alfredo Calzoni",
    subhead: "What about that new jacket if I ...",
    Profiler: Person1,
    onlineColor: BLUE,
    TimeText: "09: 12"
  },
  {
    name: "Miss Aliya",
    subhead: "I know right 😉",
    Profiler: Person2,
    onlineColor: BLUE,
    TimeText: "11:00"
  },
  {
    name: "Alfredo Calzoni",
    subhead: "What about that new jacket if I ...",
    Profiler: Person1,
    onlineColor: TRANSPARENT,
    TimeText: "09: 12"
  },
  {
    name: "Miss Aliya",
    subhead: "I know right 😉",
    Profiler: Person2,
    onlineColor: BLUE,
    TimeText: "11:00"
  },
  {
    name: "Alfredo Calzoni",
    subhead: "What about that new jacket if I ...",
    Profiler: Person1,
    onlineColor: TRANSPARENT,
    TimeText: "09: 12"
  },
  {
    name: "Miss Aliya",
    subhead: "I know right 😉",
    Profiler: Person2,
    onlineColor: BLUE,
    TimeText: "11:00"
  },
  {
    name: "Alfredo Calzoni",
    subhead: "What about that new jacket if I ...",
    Profiler: Person1,
    onlineColor: TRANSPARENT,
    TimeText: "09: 12"
  },
  {
    name: "Miss Aliya",
    subhead: "I know right 😉",
    Profiler: Person2,
    onlineColor: BLUE,
    TimeText: "11:00"
  },
  {
    name: "Alfredo Calzoni",
    subhead: "What about that new jacket if I ...",
    Profiler: Person1,
    onlineColor: TRANSPARENT,
    TimeText: "09: 12"
  },
  {
    name: "Miss Aliya",
    subhead: "I know right 😉",
    Profiler: Person2,
    onlineColor: BLUE,
    TimeText: "11:00"
  },
  {
    name: "Alfredo Calzoni",
    subhead: "What about that new jacket if I ...",
    Profiler: Person1,
    onlineColor: TRANSPARENT,
    TimeText: "09: 12"
  },
];


export const profiles = [
  {
    id: '1',
    name: 'John',
    images: [Board1, HatGirl, HatGirl2, Board1],
    smallThumbnail: [Req1, small_Thumbnail2, small_Thumbnail3, Req1]
  },
  {
    id: '2',
    name: 'Alison',
    images: [HatGirl, Board1, HatGirl2, Board1],
    smallThumbnail: [Req1, small_Thumbnail2, small_Thumbnail3, Req1]
  },
  {
    id: '3',
    name: 'Michael',
    images: [Board1, HatGirl, HatGirl2, Board1],
    smallThumbnail: [Req1, small_Thumbnail2, small_Thumbnail3, Req1]
  },
];



export const dropdownData = {
  education: {
    items: [
      { label: 'High School', value: 'high_school' },
      { label: 'Bachelor’s Degree', value: 'bachelors' },
      { label: 'Master’s Degree', value: 'masters' },
      { label: 'Doctorate', value: 'doctorate' },
    ],
  },
  institute: {
    items: [
      { label: 'Harvard University', value: 'harvard' },
      { label: 'MIT', value: 'mit' },
      { label: 'Stanford University', value: 'stanford' },
      { label: 'Oxford University', value: 'oxford' },
    ],
  },
  employment: {
    items: [
      { label: "Employed", value: "employed" },
      { label: "Self-Employed", value: "self_employed" },
      { label: "Unemployed", value: "unemployed" },
      { label: "Student", value: "student" },
    ],
  },
  profession: {
    items: [
      { label: "Engineer", value: "engineer" },
      { label: "Doctor", value: "doctor" },
      { label: "Teacher", value: "teacher" },
      { label: "Artist", value: "artist" },
    ],
  },
  religion: {
    items: [
      { label: "Islam", value: "islam" },
      { label: "Christianity", value: "christianity" },
      { label: "Hinduism", value: "hinduism" },
      { label: "Other", value: "other" },

    ],
  },
};

export const dropdownData_S2 = {
  nationality: {
    items: [
      { label: 'American', value: 'american' },
      { label: 'Canadian', value: 'canadian' },
      { label: 'Indian', value: 'indian' },
      // Add more options
    ],
  },
  residence: {
    items: [
      { label: 'USA', value: 'usa' },
      { label: 'Canada', value: 'canada' },
      { label: 'India', value: 'india' },
      // Add more options
    ],
  },
  relocation: {
    items: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      // Add more options
    ],
  },
  marital: {
    items: [
      { label: 'Single', value: 'single' },
      { label: 'Married', value: 'married' },
      { label: 'Divorced', value: 'divorced' },
      // Add more options
    ],
  },
};


export const dropdownData_S3 = {
  houseSize: {
    items: [
      { label: 'Small', value: 'small' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large' },
    ],
  },
  income: {
    items: [
      { label: 'Less than $1,000', value: 'less_than_1000' },
      { label: '$1,000 - $5,000', value: '1000_5000' },
      { label: '$5,000 - $10,000', value: '5000_10000' },
      { label: 'More than $10,000', value: 'more_than_10000' },
    ],
  },
  caste: {
    items: [
      { label: 'Caste 1', value: 'caste1' },
      { label: 'Caste 2', value: 'caste2' },
      { label: 'Caste 3', value: 'caste3' },
    ],
  },
  sect: {
    items: [
      { label: 'Sect 1', value: 'sect1' },
      { label: 'Sect 2', value: 'sect2' },
      { label: 'Sect 3', value: 'sect3' },
    ],
  },
};


export const LookingFor_DropDown_S2 = {
  nationality: {
    items: [
      { label: 'American', value: 'american' },
      { label: 'Canadian', value: 'canadian' },
      { label: 'Pakistani', value: 'pakistani' },
      // Add more nationalities as needed
    ],
  },
  country: {
    items: [
      { label: 'USA', value: 'usa' },
      { label: 'Canada', value: 'canada' },
      { label: 'Pakistan', value: 'pakistan' },
      // Add more countries as needed
    ],
  },
  city: {
    items: [
      { label: 'New York', value: 'new_york' },
      { label: 'Toronto', value: 'toronto' },
      { label: 'Karachi', value: 'karachi' },
      // Add more cities as needed
    ],
  },
  ethnicity: {
    items: [
      { label: 'Asian', value: 'asian' },
      { label: 'Caucasian', value: 'caucasian' },
      { label: 'African', value: 'african' },
      // Add more ethnicities as needed
    ],
  },
};


export const LookingFor_DropDown_S3 = {
  caste: {
    items: [
      { label: 'Caste 1', value: 'caste1' },
      { label: 'Caste 2', value: 'caste2' },
      { label: 'Caste 3', value: 'caste3' },
    ],
  },
  subCaste: {
    items: [
      { label: 'Sub Caste 1', value: 'subCaste1' },
      { label: 'Sub Caste 2', value: 'subCaste2' },
      { label: 'Sub Caste 3', value: 'subCaste3' },
    ],
  },
  religion: {
    items: [
      { label: 'Religion 1', value: 'religion1' },
      { label: 'Religion 2', value: 'religion2' },
      { label: 'Religion 3', value: 'religion3' },
    ],
  },
  sect: {
    items: [
      { label: 'Sect 1', value: 'sect1' },
      { label: 'Sect 2', value: 'sect2' },
      { label: 'Sect 3', value: 'sect3' },
    ],
  },
  subSect: {
    items: [
      { label: 'Sub Sect 1', value: 'subSect1' },
      { label: 'Sub Sect 2', value: 'subSect2' },
      { label: 'Sub Sect 3', value: 'subSect3' },
    ],
  },
};

export const LookingFor_dropdownData_S1 = {
  partnerEducation: {
    items: [
      { label: 'High School', value: 'high_school' },
      { label: 'Bachelor\'s Degree', value: 'bachelor' },
      { label: 'Master\'s Degree', value: 'master' },
      { label: 'PhD', value: 'phd' },
    ],
  },
  institutes: {
    items: [
      { label: 'Harvard University', value: 'harvard' },
      { label: 'MIT', value: 'mit' },
      { label: 'Stanford University', value: 'stanford' },
      { label: 'Oxford University', value: 'oxford' },
    ],
  },
};
