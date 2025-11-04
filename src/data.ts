import { Briefcase, Droplets, HeartPulse, Leaf, Map, Users } from 'lucide-react';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#industries', label: 'Industries' },
  { href: '#thematic-areas', label: 'Thematic Areas' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

export const industries = [
  {
    name: 'Agriculture',
    description: 'Optimizing crop and livestock production through sustainable practices and innovative technology.',
    icon: Leaf,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1eab3262-66c9-44c8-980a-696d453f45e0/agriculture-muktzxu-1762242183042.webp',
  },
  {
    name: 'Geoinformatics',
    description: 'Using GIS and remote sensing for spatial analysis, environmental monitoring, and resource management.',
    icon: Map,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1eab3262-66c9-44c8-980a-696d453f45e0/geoinformatics-o2nhnra-1762242192468.webp',
  },
  {
    name: 'Water Resources',
    description: 'Strategies for efficient water management, conservation, and climate resilience.',
    icon: Droplets,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1eab3262-66c9-44c8-980a-696d453f45e0/water-resources-tzoa5vu-1762242201096.webp',
  },
  {
    name: 'Social Affairs',
    description: 'Offering expert advice on social impact, community development, inclusion, equity, and stakeholder engagement.',
    icon: Users,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1eab3262-66c9-44c8-980a-696d453f45e0/social-affairs-mqughqe-1762242210617.webp',
  },
  {
    name: 'Public Health',
    description: 'Evaluating health programs and conducting epidemiological studies to improve health equity.',
    icon: HeartPulse,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1eab3262-66c9-44c8-980a-696d453f45e0/public-health-hwqacqv-1762242220321.webp',
  },
];

export const thematicAreas = [
    'Infrastructure',
    'Watershed management',
    'Water quality',
    'Modeling',
    'Climate resilience',
    'Environmental impacts',
    'Agriculture',
];
