export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: Image
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}
export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concepts = {
  title: string
}
export type SectionConceptsProps = {
  title: string,
  concepts: Concepts[]
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}
export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallments: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}
export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  photo: Image
  name: string
  text: string
}
export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question ={
  question: string
  answer: string
}
export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
