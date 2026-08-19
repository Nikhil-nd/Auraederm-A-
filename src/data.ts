import { ServiceDetail, SkinRoutineResult } from './types';

export const CLINIC_INFO = {
  "name": "Auraederm Skin Solutions",
  "doctorName": "Dr. Aishwarya Devaraj",
  "title": "Clinical & Aesthetic Dermatologist",
  "tagline": "Expert Care for Healthy, Radiant Skin",
  "phone": "+91 8595333794",
  "email": "Auraederm@gmail.com",
  "instagram": "aishwarya_raj26",
  "address": "2nd floor, HQ Manik, C4, Opposite to HUDA market, Sector 23, Gurugram, Haryana 122017",
  "googleMapsUrl": "https://maps.app.goo.gl/8pJ6TC1eEqPQPk22A",
  "googleMapsMockUrl": "https://maps.google.com/maps?q=Auraederm+Skin+Solutions+Sector+23+Gurugram&output=embed",
  "timings": [
    {
      "days": "Monday - Saturday",
      "hours": "10:00 AM - 07:00 PM"
    },
    {
      "days": "Sunday",
      "hours": "By Appointment Only"
    }
  ]
};

export const SERVICES: ServiceDetail[] = [
  {
    "id": "pediatric-geriatric-dermatology",
    "name": "Pediatric & Geriatric Dermatology",
    "category": "clinical",
    "description": "Dermatology care for newborns, children, older adults, and age-specific skin issues.",
    "longDescription": "Dermatology care tailored for the unique needs of newborns, children, and older adults. We provide specialized diagnosis and treatment for age-specific skin issues with a focus on gentle, effective care.",
    "benefits": [
      "Specialized care for age-specific skin needs",
      "Gentle treatments suitable for delicate skin",
      "Comprehensive management of pediatric and geriatric conditions"
    ],
    "faqs": [
      {
        "question": "Are these treatments safe for children/seniors?",
        "answer": "Yes, our treatments are specifically tailored to be safe and effective for delicate or aging skin."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "stis-genital-skin-disorders",
    "name": "STIs & Genital Skin Disorders",
    "category": "clinical",
    "description": "Diagnosis and management of sexually transmitted infections and genital skin conditions.",
    "longDescription": "Professional diagnosis and management of sexually transmitted infections and genital skin conditions. Our clinic ensures a safe, respectful, and confidential environment for all patients.",
    "benefits": [
      "Accurate diagnosis of genital skin conditions",
      "Confidential and discreet medical care",
      "Effective management of sexually transmitted infections"
    ],
    "faqs": [
      {
        "question": "Is the consultation completely confidential?",
        "answer": "Absolutely. We maintain strict patient confidentiality for all consultations and treatments."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "pregnancy-induced-dermatosis",
    "name": "Pregnancy-Induced Dermatosis",
    "category": "clinical",
    "description": "Care for skin problems that appear or worsen during pregnancy.",
    "longDescription": "Specialized care for skin problems that appear or worsen during pregnancy, such as melasma, stretch marks, and pregnancy-induced rashes, using entirely safe and approved methods.",
    "benefits": [
      "Safe treatments during pregnancy and nursing",
      "Effective management of pregnancy-related skin changes",
      "Expert guidance on safe skincare routines"
    ],
    "faqs": [
      {
        "question": "Are these treatments safe for my baby?",
        "answer": "Yes, we only use treatments and products that are strictly safe for use during pregnancy and breastfeeding."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "psoriasis-autoimmune-skin-disease",
    "name": "Psoriasis & Autoimmune Skin Disease Care",
    "category": "clinical",
    "description": "Specialized management for psoriasis and other immune-mediated skin diseases.",
    "longDescription": "Comprehensive and specialized management for psoriasis and other immune-mediated skin diseases. We focus on controlling symptoms, reducing flare-ups, and improving overall skin health through personalized care plans.",
    "benefits": [
      "Targeted management of autoimmune flare-ups",
      "Reduction of scaling and inflammation",
      "Long-term disease management strategies"
    ],
    "faqs": [
      {
        "question": "Can psoriasis be completely cured?",
        "answer": "While psoriasis is a chronic condition, our specialized management plans can effectively control symptoms and provide long periods of remission."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "vitiligo-care",
    "name": "Vitiligo (White Patches) Care",
    "category": "clinical",
    "description": "Diagnosis and management for depigmentation (white patches) using medical and procedural treatment options.",
    "longDescription": "Expert diagnosis and management for depigmentation and white patch conditions. We utilize the latest medical and procedural treatment options to stabilize the condition and promote repigmentation where possible.",
    "benefits": [
      "Accurate diagnosis and condition monitoring",
      "Advanced medical and procedural options",
      "Supportive care for repigmentation"
    ],
    "faqs": [
      {
        "question": "What treatment options are available?",
        "answer": "We offer a range of treatments from topical medications and light therapy to advanced procedural options, customized to each patient's condition."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "nail-infections-disorders",
    "name": "Nail Infections & Nail Disorders",
    "category": "clinical",
    "description": "Treatment for nail fungal infections, discoloration, thickening, ingrown nails, and other common nail disorders.",
    "longDescription": "Comprehensive treatment for various nail concerns including fungal infections, discoloration, thickening, and ingrown nails. We help restore the health and appearance of your nails through targeted therapies.",
    "benefits": [
      "Effective eradication of fungal infections",
      "Treatment of structural nail disorders",
      "Restoration of healthy nail growth"
    ],
    "faqs": [
      {
        "question": "How long does it take for a nail infection to clear?",
        "answer": "Nail infections can take several months to fully clear as the new, healthy nail grows out. Consistent treatment is key."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "general-clinical-dermatology",
    "name": "Clinical Dermatology",
    "category": "clinical",
    "description": "Comprehensive evaluation and treatment for a wide range of common skin conditions.",
    "longDescription": "Expert diagnosis and management for all general dermatological concerns. We provide comprehensive consultations to address various skin issues, ensuring accurate diagnosis and effective treatment plans tailored to your specific needs.",
    "benefits": [
      "Accurate diagnosis of general skin conditions",
      "Personalized, effective treatment plans",
      "Expert medical guidance for skin health",
      "Preventive care strategies"
    ],
    "faqs": [
      {
        "question": "What should I bring to my consultation?",
        "answer": "Please bring a list of your current skincare products and any previous medical records related to your skin condition."
      },
      {
        "question": "Do you treat severe skin conditions?",
        "answer": "Yes, we manage both mild and severe clinical dermatology conditions."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "rosacea-sensitive-skin",
    "name": "Rosacea & Sensitive Skin Care",
    "category": "clinical",
    "description": "Specialized care for persistent redness, flushing, and sensitive skin concerns.",
    "longDescription": "Expert management for rosacea and sensitive skin conditions. We focus on identifying triggers, reducing inflammation, and strengthening the skin barrier to minimize redness and discomfort.",
    "benefits": [
      "Reduction in facial redness and flushing",
      "Strengthened skin barrier function",
      "Identification and management of triggers",
      "Relief from skin sensitivity and irritation"
    ],
    "faqs": [
      {
        "question": "Can rosacea be cured?",
        "answer": "Rosacea cannot be completely cured, but it can be effectively managed with the right skincare, lifestyle changes, and treatments."
      },
      {
        "question": "What products are safe for my sensitive skin?",
        "answer": "We will recommend a customized, gentle skincare routine tailored to your specific sensitivities."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "moles-warts-growths",
    "name": "Moles, Warts, Corns, Calluses & Skin Growths",
    "category": "clinical",
    "description": "Evaluation and removal of common benign skin growths and lesions.",
    "longDescription": "Professional diagnosis and management of various skin growths including moles, warts, corns, and calluses. We offer safe and effective removal options ensuring minimal scarring and optimal cosmetic results.",
    "benefits": [
      "Accurate evaluation of skin lesions",
      "Safe and effective removal procedures",
      "Relief from painful corns and calluses",
      "Prevention of spread for viral warts"
    ],
    "faqs": [
      {
        "question": "Is mole removal painful?",
        "answer": "We use local anesthesia to ensure mole removal procedures are as comfortable and painless as possible."
      },
      {
        "question": "Will warts come back after removal?",
        "answer": "While removal is effective, warts are caused by a virus and can sometimes recur. We offer comprehensive treatments to minimize this risk."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "skin-cancer-screening",
    "name": "Skin Cancer Screening & Mole Evaluation",
    "category": "clinical",
    "description": "Thorough skin examinations to detect precancerous lesions and evaluate suspicious moles.",
    "longDescription": "Comprehensive full-body skin checks focusing on the early detection of skin cancers. We carefully evaluate atypical moles and lesions to ensure timely intervention and peace of mind.",
    "benefits": [
      "Early detection of skin malignancies",
      "Detailed evaluation of atypical moles",
      "Peace of mind and preventive health",
      "Expert advice on sun protection"
    ],
    "faqs": [
      {
        "question": "How often should I get a skin cancer screening?",
        "answer": "We generally recommend an annual screening, or more frequently if you have a family history or multiple atypical moles."
      },
      {
        "question": "What happens if a suspicious mole is found?",
        "answer": "If a mole looks suspicious, we may recommend a biopsy to confirm the diagnosis before proceeding with treatment."
      }
    ],
    "duration": "30 mins"
  },
  
  {
    "id": "drug-allergy-rash",
    "name": "Drug Allergy & Skin Rash Management",
    "category": "clinical",
    "description": "Rapid evaluation and management of severe drug eruptions and acute skin rashes.",
    "longDescription": "Expert care for acute skin rashes, including suspected drug allergies and contact eruptions. We focus on identifying the trigger, stopping the reaction, and providing fast relief from inflammation and itching.",
    "benefits": [
      "Accurate identification of allergic triggers",
      "Fast relief from acute rashes and itching",
      "Prevention of severe allergic complications",
      "Clear guidance on avoiding future reactions"
    ],
    "faqs": [
      {
        "question": "Should I stop my medication if I get a rash?",
        "answer": "If you suspect a drug allergy, consult a doctor immediately before stopping essential medications, unless the reaction is severe."
      },
      {
        "question": "How quickly will the rash go away?",
        "answer": "With the right medical intervention, acute rashes typically begin to improve within days."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "connective-tissue-disorders",
    "name": "Connective Tissue & Autoimmune Skin Disorders",
    "category": "clinical",
    "description": "Specialized care for complex skin conditions like Lupus, Dermatomyositis, and Scleroderma.",
    "longDescription": "Comprehensive diagnostic and management services for autoimmune and connective tissue disorders affecting the skin. We work closely to manage cutaneous symptoms and minimize disease progression.",
    "benefits": [
      "Expert management of complex autoimmune skin signs",
      "Reduction of inflammation and skin damage",
      "Coordination with rheumatology if needed",
      "Long-term monitoring and care plans"
    ],
    "faqs": [
      {
        "question": "Can these conditions affect my internal organs?",
        "answer": "Yes, many connective tissue disorders are systemic. We focus on the skin but will coordinate care for your overall health."
      },
      {
        "question": "What treatments do you use?",
        "answer": "Treatments often include specialized topicals, sun protection strategies, and systemic immunomodulatory medications."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "oral-lip-disorders",
    "name": "Oral & Lip Disorders",
    "category": "clinical",
    "description": "Evaluation and treatment of conditions affecting the lips and oral mucosa.",
    "longDescription": "Specialized care for conditions affecting the lips and the inside of the mouth, such as lichen planus, recurrent ulcers, and cheilitis. We focus on reducing pain, healing mucosal lesions, and preventing recurrence.",
    "benefits": [
      "Accurate diagnosis of oral mucosal conditions",
      "Relief from painful lip and mouth sores",
      "Management of chronic oral inflammation",
      "Prevention of secondary infections"
    ],
    "faqs": [
      {
        "question": "Are oral ulcers contagious?",
        "answer": "Most chronic oral ulcers or conditions like oral lichen planus are not contagious, but proper diagnosis is key."
      },
      {
        "question": "How are lip disorders treated?",
        "answer": "Treatments vary from specialized topical ointments to lifestyle modifications, depending on the specific condition."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "pigmentary-birthmarks",
    "name": "Pigmentary Birthmarks & Nevi",
    "category": "clinical",
    "description": "Evaluation and management of birthmarks, large moles, and congenital pigmentary conditions.",
    "longDescription": "Expert assessment of congenital birthmarks and large nevi. We offer detailed evaluations to monitor for any changes and provide cosmetic or medical treatment options where appropriate.",
    "benefits": [
      "Accurate evaluation of congenital lesions",
      "Monitoring for potential malignant changes",
      "Cosmetic improvement options if desired",
      "Expert guidance for pediatric birthmarks"
    ],
    "faqs": [
      {
        "question": "Can birthmarks be completely removed?",
        "answer": "Depending on the type of birthmark, laser therapies can significantly lighten or remove them, though some may require surgical excision."
      },
      {
        "question": "Are birthmarks dangerous?",
        "answer": "Most are harmless, but certain types (like large congenital nevi) require regular monitoring by a dermatologist."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "chronic-ulcers-wound-care",
    "name": "Chronic Ulcers & Wound Care",
    "category": "clinical",
    "description": "Specialized dermatological care for non-healing wounds and chronic skin ulcers.",
    "longDescription": "Comprehensive management of chronic, non-healing skin ulcers, including venous, arterial, and diabetic ulcers. Our focus is on addressing underlying causes, preventing infection, and promoting optimal tissue healing.",
    "benefits": [
      "Expert assessment of wound etiology",
      "Advanced dressings and local wound care",
      "Prevention and management of infections",
      "Promotion of healthy tissue regeneration"
    ],
    "faqs": [
      {
        "question": "Why is my wound not healing?",
        "answer": "Non-healing wounds often have underlying vascular, metabolic, or infectious causes that need to be addressed for proper healing."
      },
      {
        "question": "What kind of dressings do you use?",
        "answer": "We use advanced medical dressings tailored to the specific stage and type of the ulcer to optimize healing."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "leprosy-infectious-diseases",
    "name": "Leprosy & Chronic Infectious Skin Diseases",
    "category": "clinical",
    "description": "Diagnosis and long-term management of Hansen's disease and other chronic skin infections.",
    "longDescription": "Expert diagnosis and compassionate, long-term management of chronic infectious skin diseases including Leprosy (Hansen's disease). We ensure accurate diagnosis and adherence to multi-drug therapy protocols.",
    "benefits": [
      "Accurate diagnosis of chronic infections",
      "Access to established medical therapy protocols",
      "Prevention of disease-related complications",
      "Compassionate, confidential patient care"
    ],
    "faqs": [
      {
        "question": "Is leprosy still a concern today?",
        "answer": "Yes, it is entirely treatable with modern multi-drug therapy, but early diagnosis is crucial to prevent nerve damage."
      },
      {
        "question": "How long is the treatment?",
        "answer": "Treatment for chronic infections like leprosy can range from 6 months to over a year, depending on the type and severity."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "photodermatoses",
    "name": "Photodermatoses (Sun Allergy)",
    "category": "clinical",
    "description": "Care for skin conditions triggered or worsened by exposure to sunlight.",
    "longDescription": "Specialized management for sun-induced skin reactions (photodermatoses) such as PMLE. We help identify triggers, manage acute flare-ups, and provide strategies for safe sun exposure.",
    "benefits": [
      "Accurate diagnosis of light-induced rashes",
      "Relief from acute sun allergy symptoms",
      "Expert advice on specialized photoprotection",
      "Preventive strategies for future exposure"
    ],
    "faqs": [
      {
        "question": "Can I ever go in the sun again?",
        "answer": "Yes, with proper management, specialized sunscreens, and protective measures, most patients can safely enjoy the outdoors."
      },
      {
        "question": "What causes sun allergies?",
        "answer": "They are often immune-mediated reactions triggered specifically by UV exposure."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "occupational-contact-dermatitis",
    "name": "Occupational & Contact Dermatitis",
    "category": "clinical",
    "description": "Diagnosis and management of skin reactions caused by contact with allergens or irritants.",
    "longDescription": "Expert care for skin inflammation caused by contact with external substances, including occupational hazards. We focus on identifying the offending agent, managing the acute rash, and preventing recurrence.",
    "benefits": [
      "Identification of specific allergens/irritants",
      "Relief from severe itching and inflammation",
      "Guidance on occupational skin safety",
      "Prevention of chronic skin changes"
    ],
    "faqs": [
      {
        "question": "How do you find out what I'm allergic to?",
        "answer": "We may recommend patch testing to accurately identify the specific substances triggering your dermatitis."
      },
      {
        "question": "Can contact dermatitis spread?",
        "answer": "No, it is not contagious, but it can appear anywhere the allergen has touched your skin."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "insect-bite-parasitic",
    "name": "Insect Bite & Parasitic Skin Disorders",
    "category": "clinical",
    "description": "Treatment for severe insect bite reactions and conditions like scabies and lice.",
    "longDescription": "Rapid diagnosis and treatment for exaggerated reactions to insect bites and parasitic skin infestations. We provide effective medical solutions to eradicate parasites and relieve intense itching.",
    "benefits": [
      "Fast relief from intense pruritus (itching)",
      "Effective eradication of skin parasites",
      "Management of exaggerated bite reactions",
      "Prevention of secondary bacterial infections"
    ],
    "faqs": [
      {
        "question": "Are parasitic infections highly contagious?",
        "answer": "Yes, conditions like scabies are highly contagious and often require treating close contacts simultaneously."
      },
      {
        "question": "Why do insect bites cause such bad rashes for me?",
        "answer": "Some individuals have an exaggerated immune response to insect saliva, leading to severe, long-lasting rashes."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "hair-fall-evaluation",
    "name": "Hair Fall Evaluation & Treatment",
    "category": "hair",
    "description": "Comprehensive assessment to identify the root cause of hair loss and provide targeted solutions.",
    "longDescription": "A thorough evaluation of excessive hair shedding using clinical examination and trichoscopy. We identify nutritional, hormonal, or stress-related causes to create an effective, personalized treatment plan.",
    "benefits": [
      "Accurate identification of hair loss causes",
      "Personalized medical and nutritional guidance",
      "Reduction in active hair shedding",
      "Stimulation of healthy hair regrowth"
    ],
    "faqs": [
      {
        "question": "Is my hair fall normal?",
        "answer": "Losing up to 100 hairs a day is normal. If you notice significantly more, or visible thinning, an evaluation is recommended."
      },
      {
        "question": "What tests will I need?",
        "answer": "We may suggest blood tests to check for vitamin deficiencies, thyroid issues, or hormonal imbalances."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "alopecia-areata",
    "name": "Alopecia Areata Management",
    "category": "hair",
    "description": "Targeted treatments for sudden, patchy hair loss caused by autoimmune factors.",
    "longDescription": "Expert management of Alopecia Areata, an autoimmune condition causing patchy hair loss. We offer specialized treatments including intralesional therapies and topical immunomodulators to stimulate regrowth.",
    "benefits": [
      "Targeted treatment of autoimmune hair loss",
      "Stimulation of localized hair regrowth",
      "Management of recurrent flare-ups",
      "Comprehensive scalp health monitoring"
    ],
    "faqs": [
      {
        "question": "Will my hair grow back?",
        "answer": "In most cases of Alopecia Areata, hair does grow back, especially with prompt and targeted treatment."
      },
      {
        "question": "Is it caused by stress?",
        "answer": "While it is an autoimmune condition, extreme stress can sometimes trigger or exacerbate episodes."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "female-pattern-hair-loss",
    "name": "Female Pattern Hair Loss",
    "category": "hair",
    "description": "Specialized care for hormonal and genetic hair thinning in women.",
    "longDescription": "Comprehensive management for female pattern hair loss (androgenetic alopecia). We focus on addressing hormonal factors, slowing down thinning, and improving hair density using medical and procedural therapies.",
    "benefits": [
      "Targeted approach for female-specific hair loss",
      "Hormonal and genetic factor evaluation",
      "Slowing of progressive hair thinning",
      "Improvement in overall hair density"
    ],
    "faqs": [
      {
        "question": "Is this condition reversible?",
        "answer": "While genetic hair loss cannot be completely cured, early intervention can significantly slow the process and improve density."
      },
      {
        "question": "What treatments are effective?",
        "answer": "We use a combination of topical solutions, oral medications, and therapies like PRP/GFC."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "male-pattern-baldness",
    "name": "Male Pattern Baldness",
    "category": "hair",
    "description": "Advanced medical and procedural treatments for genetic hair loss in men.",
    "longDescription": "Expert care for male pattern baldness (androgenetic alopecia). We offer proven medical treatments and advanced therapies like PRP to maintain existing hair and stimulate regrowth in thinning areas.",
    "benefits": [
      "Effective management of genetic hair loss",
      "Prevention of further follicle miniaturization",
      "Maintenance of current hair volume",
      "Advanced options for regrowth stimulation"
    ],
    "faqs": [
      {
        "question": "When should I start treatment?",
        "answer": "Early intervention is crucial. The sooner you start, the better the chances of maintaining your hair."
      },
      {
        "question": "Do hair loss medications have side effects?",
        "answer": "Like all medications, they can, but we carefully evaluate and monitor you to ensure safe and effective use."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "dandruff-seborrheic-dermatitis",
    "name": "Dandruff & Seborrheic Dermatitis",
    "category": "hair",
    "description": "Effective medical control for chronic flaking, itching, and scalp inflammation.",
    "longDescription": "Targeted treatment for stubborn dandruff and seborrheic dermatitis. We provide prescription-strength solutions to control yeast overgrowth, reduce inflammation, and relieve severe scalp itching.",
    "benefits": [
      "Relief from chronic scalp itching",
      "Significant reduction in scalp flaking",
      "Control of underlying inflammation",
      "Maintenance routines for long-term clarity"
    ],
    "faqs": [
      {
        "question": "Why doesn't regular anti-dandruff shampoo work for me?",
        "answer": "Over-the-counter shampoos may not be strong enough for severe cases, which require prescription medical therapies."
      },
      {
        "question": "Can dandruff cause hair fall?",
        "answer": "Yes, severe scalp inflammation and aggressive scratching can lead to temporary hair loss."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "scalp-psoriasis",
    "name": "Scalp Psoriasis Treatment",
    "category": "hair",
    "description": "Specialized care to manage thick scales and inflammation on the scalp.",
    "longDescription": "Comprehensive management for psoriasis affecting the scalp. We utilize advanced topical treatments and specialized therapies to clear thick scales, reduce redness, and alleviate discomfort.",
    "benefits": [
      "Effective clearing of thick scalp scales",
      "Reduction of underlying inflammation",
      "Relief from scalp tightness and itching",
      "Prevention of associated hair loss"
    ],
    "faqs": [
      {
        "question": "Is scalp psoriasis different from dandruff?",
        "answer": "Yes, psoriasis causes thicker, silvery scales and is an autoimmune condition, requiring different treatment than dandruff."
      },
      {
        "question": "Will I lose my hair?",
        "answer": "Hair loss can occur due to severe scaling or scratching, but it usually regrows once the psoriasis is controlled."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "prp-hair-therapy",
    "name": "PRP Hair Therapy",
    "category": "hair",
    "description": "Platelet-Rich Plasma therapy to naturally stimulate hair follicles and promote growth.",
    "longDescription": "Advanced PRP (Platelet-Rich Plasma) therapy utilizes your body's own growth factors to rejuvenate dormant hair follicles. This natural, safe procedure is highly effective for thinning hair and early hair loss.",
    "benefits": [
      "Natural stimulation of hair follicles",
      "Increased hair thickness and density",
      "Reduction in hair shedding",
      "Safe procedure using your own growth factors"
    ],
    "faqs": [
      {
        "question": "How many sessions will I need?",
        "answer": "Typically, 3-6 sessions spaced about a month apart are recommended for optimal initial results."
      },
      {
        "question": "Is the procedure painful?",
        "answer": "We use topical numbing and advanced techniques to ensure the procedure is as comfortable as possible."
      }
    ],
    "duration": "60 mins"
  },
  {
    "id": "gfc-hair-therapy",
    "name": "GFC Hair Therapy",
    "category": "hair",
    "description": "Growth Factor Concentrate therapy for advanced, high-yield hair rejuvenation.",
    "longDescription": "GFC (Growth Factor Concentrate) is an advanced evolution of PRP, providing a highly concentrated dose of growth factors derived from your blood. It offers superior follicle stimulation with fewer sessions.",
    "benefits": [
      "Highly concentrated growth factors",
      "Superior stimulation for hair regrowth",
      "Fewer sessions required compared to standard PRP",
      "Minimal discomfort and downtime"
    ],
    "faqs": [
      {
        "question": "How is GFC different from PRP?",
        "answer": "GFC uses a specialized process to extract a higher, purer concentration of growth factors without unwanted cells, often yielding faster results."
      },
      {
        "question": "Is it safe?",
        "answer": "Absolutely, it is completely natural as it uses factors derived solely from your own blood."
      }
    ],
    "duration": "60 mins"
  },
  {
    "id": "hair-mesotherapy",
    "name": "Hair Mesotherapy",
    "category": "hair",
    "description": "Direct delivery of vitamins, minerals, and DHT blockers to the hair roots.",
    "longDescription": "Mesotherapy involves micro-injections of a specialized cocktail of vitamins, amino acids, and DHT blockers directly into the scalp. It deeply nourishes the follicles to stop hair fall and improve hair quality.",
    "benefits": [
      "Direct nourishment of hair follicles",
      "Delivery of vital nutrients and DHT blockers",
      "Improvement in hair texture and strength",
      "Effective adjunctive therapy for hair loss"
    ],
    "faqs": [
      {
        "question": "What is in the mesotherapy cocktail?",
        "answer": "It is a customized blend of essential vitamins, peptides, amino acids, and sometimes DHT blockers tailored to your needs."
      },
      {
        "question": "Does it hurt?",
        "answer": "The micro-injections are very superficial. We use techniques to ensure it is very well tolerated with minimal discomfort."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "chemical-peels",
    "name": "Chemical Peels",
    "category": "aesthetic",
    "description": "Acne,Pigmentation,Melasma,Party Peels",
    "longDescription": "Expertly formulated chemical peels to treat dullness, pigmentation, and uneven texture. We carefully select specific acids (like Glycolic, Salicylic, or Lactic) to safely exfoliate and rejuvenate your skin.",
    "benefits": [
      "Brighter and more radiant complexion",
      "Reduction in superficial pigmentation and spots",
      "Smoother skin texture and refined pores",
      "Stimulation of mild collagen production"
    ],
    "faqs": [
      {
        "question": "Will my skin peel off in sheets?",
        "answer": "Most modern peels result in micro-flaking that is barely visible, not dramatic peeling."
      },
      {
        "question": "How long does it take?",
        "answer": "The procedure itself is quick, often called a 'lunchtime peel', taking about 20-30 minutes."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "laser-hair-reduction",
    "name": "Laser Hair Reduction (Diolaze)",
    "category": "aesthetic",
    "description": "Safe, effective, and long-lasting reduction of unwanted body or facial hair, featuring precise beard shaping.",
    "longDescription": "Advanced laser hair reduction featuring high-speed Diolaze technology for a safe, powerful, and painless reduction of unwanted hair. Suitable for all skin types, full-body grooming, and sharp, precise male beard shaping.",
    "benefits": [
      "Advanced high-speed Diolaze laser technology",
      "Precise beard shaping and line contouring for men",
      "Long-lasting reduction in hair growth with minimal discomfort",
      "Prevention of painful ingrown hairs and razor bumps"
    ],
    "faqs": [
      {
        "question": "Is it permanent hair removal?",
        "answer": "It is technically termed 'permanent hair reduction'. You can expect an 80-90% reduction, with remaining hair being fine and light."
      },
      {
        "question": "Does it hurt?",
        "answer": "Diolaze features one of the largest built-in skin cooling surfaces, making the treatment highly comfortable compared to older lasers."
      }
    ],
    "duration": "60 mins"
  },
  {
    "id": "laser-pigmentation",
    "name": "Laser Pigmentation Treatment",
    "category": "aesthetic",
    "description": "Tatoo Removal, Laser tonning ,Tan Removal.  ",
    "longDescription": "Targeted laser treatments to break down excess melanin in the skin. Highly effective for stubborn pigmentation, sun spots, and uneven skin tone, resulting in a clearer, more uniform complexion.",
    "benefits": [
      "Targeted reduction of dark spots",
      "Effective treatment for stubborn pigmentation",
      "Safe breakdown of excess melanin",
      "Overall brightening of skin tone"
    ],
    "faqs": [
      {
        "question": "How many sessions are required?",
        "answer": "Depending on the depth of pigmentation, most patients need 3 to 6 sessions for optimal results."
      },
      {
        "question": "Is there downtime?",
        "answer": "Downtime is minimal. You may experience mild redness that subsides quickly, followed by slight darkening of the spots before they flake off."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "laser-scar-revision",
    "name": "Laser Scar Revision",
    "category": "aesthetic",
    "description": "Fractional laser technology to resurface skin and reduce the appearance of scars.",
    "longDescription": "Advanced fractional laser resurfacing to treat acne scars, surgical scars, and uneven texture. The laser stimulates deep collagen remodeling, significantly improving the skin's smoothness and appearance.",
    "benefits": [
      "Significant reduction in scar depth",
      "Improvement in overall skin texture",
      "Deep collagen stimulation and remodeling",
      "Effective for various types of scars"
    ],
    "faqs": [
      {
        "question": "What is the downtime?",
        "answer": "Fractional lasers typically require 3-5 days of downtime involving redness and mild peeling."
      },
      {
        "question": "Are results permanent?",
        "answer": "Yes, the collagen remodeling and scar improvement achieved with these lasers are permanent."
      }
    ],
    "duration": "60 mins"
  },
  {
    "id": "carbon-laser-peel",
    "name": "Carbon Laser Peel",
    "category": "aesthetic",
    "description": "The 'Hollywood Peel' for instant glow, pore reduction, and oil control.",
    "longDescription": "A highly popular, zero-downtime procedure involving a carbon mask and specialized laser. It deeply cleanses pores, reduces oiliness, and provides an instant, radiant glow perfect before events.",
    "benefits": [
      "Instant brightening and glowing skin",
      "Deep pore cleansing and reduction",
      "Control of excess oil production",
      "Zero downtime 'lunchtime' procedure"
    ],
    "faqs": [
      {
        "question": "Why is it called the Hollywood Peel?",
        "answer": "Because it provides an instant glow with no downtime, making it a favorite among celebrities before red carpet events."
      },
      {
        "question": "Is it good for oily skin?",
        "answer": "Yes, it is highly effective at targeting sebaceous glands and reducing excess oil."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "skin-rejuvenation",
    "name": "Skin Rejuvenation",
    "category": "aesthetic",
    "description": "Comprehensive treatments to restore youthful vitality and radiance to the skin.",
    "longDescription": "Customized rejuvenation plans using a combination of mild lasers, peels, and tailored skincare to combat early signs of aging, dullness, and environmental damage.",
    "benefits": [
      "Restoration of skin vitality and glow",
      "Improvement in mild fine lines",
      "Even out of skin tone",
      "Customized, multi-modality approach"
    ],
    "faqs": [
      {
        "question": "What does skin rejuvenation involve?",
        "answer": "It is a customized mix of gentle procedures designed to refresh your skin based on its current needs."
      },
      {
        "question": "Who is a good candidate?",
        "answer": "Anyone looking to refresh their complexion, combat dullness, or address early signs of aging."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "hydrafacial",
    "name": "HydraFacial",
    "category": "aesthetic",
    "description": "Medical-grade hydradermabrasion for deep cleansing, extraction, and intense hydration.",
    "longDescription": "A multi-step medical facial that cleanses, evenly exfoliates, and extracts impurities while simultaneously infusing the skin with nourishing serums. Delivers an immediate, unmistakable glow.",
    "benefits": [
      "Deep cleansing and gentle exfoliation",
      "Painless extraction of impurities",
      "Intense hydration and nourishment",
      "Immediate, noticeable glow with no downtime"
    ],
    "faqs": [
      {
        "question": "How often should I get a HydraFacial?",
        "answer": "For optimal skin health, we recommend one session every 4 to 6 weeks."
      },
      {
        "question": "Is it suitable for sensitive skin?",
        "answer": "Yes, HydraFacial is highly customizable and very gentle, making it suitable for all skin types."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "microneedling",
    "name": "Microneedling",
    "category": "aesthetic",
    "description": "Collagen induction therapy to improve texture, fine lines, and superficial scars.",
    "longDescription": "A minimally invasive procedure using fine needles to create controlled micro-injuries. This stimulates the body's natural wound healing process, boosting collagen and elastin production for firmer, smoother skin.",
    "benefits": [
      "Stimulation of natural collagen production",
      "Improvement in skin texture and firmness",
      "Reduction of fine lines and large pores",
      "Enhanced absorption of topical serums"
    ],
    "faqs": [
      {
        "question": "Does microneedling hurt?",
        "answer": "We apply a strong topical numbing cream beforehand, making the procedure very comfortable."
      },
      {
        "question": "How long is the recovery?",
        "answer": "Expect mild redness, similar to a sunburn, for 24-48 hours post-procedure."
      }
    ],
    "duration": "60 mins"
  },
  {
    "id": "mnrf",
    "name": "Morpheus8 MNRF (Microneedling with RF)",
    "category": "aesthetic",
    "description": "We use Morpheus8, one of the world's leading MNRF technologies, to deliver advanced skin tightening and rejuvenation.",
    "longDescription": "MNRF delivers radiofrequency energy deep into the dermis through micro-needles. This powerful combination provides significant skin tightening, lifting, and profound improvement for deep acne scars.",
    "benefits": [
      "Deep skin tightening and lifting",
      "Significant improvement for deep acne scars",
      "Powerful collagen and elastin remodeling",
      "Customizable depth for targeted results"
    ],
    "faqs": [
      {
        "question": "How is MNRF different from regular microneedling?",
        "answer": "MNRF adds radiofrequency heat energy beneath the skin's surface, leading to much deeper and more significant collagen remodeling."
      },
      {
        "question": "When will I see results?",
        "answer": "While you may see early improvement, optimal results appear after 2-3 months as new collagen forms."
      }
    ],
    "duration": "60 mins"
  },
  {
    "id": "botox",
    "name": "Botox & Anti-Wrinkle Injections",
    "category": "aesthetic",
    "description": "Neuromodulators to relax dynamic facial muscles and smooth out expression lines.",
    "longDescription": "Expertly administered anti-wrinkle injections to soften dynamic lines like forehead creases, frown lines, and crow's feet. We aim for a natural, refreshed look, never 'frozen'.",
    "benefits": [
      "Smoothing of dynamic expression lines",
      "Prevention of deeper wrinkle formation",
      "Quick procedure with no downtime",
      "Natural-looking, refreshed appearance"
    ],
    "faqs": [
      {
        "question": "Will my face look frozen?",
        "answer": "No, our goal is subtle enhancement. We use precise dosing to maintain your natural expressions while softening wrinkles."
      },
      {
        "question": "How long do the results last?",
        "answer": "Results typically last between 3 to 5 months, depending on the individual."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "dermal-fillers",
    "name": "Dermal Fillers",
    "category": "aesthetic",
    "description": "Hyaluronic acid fillers to restore volume, contour features, and soften deep folds.",
    "longDescription": "Premium hyaluronic acid dermal fillers used strategically to restore lost facial volume, enhance lips, contour cheeks, and soften deep nasolabial folds for a youthful, lifted appearance.",
    "benefits": [
      "Immediate restoration of facial volume",
      "Enhancement of lips and cheek contours",
      "Softening of deep facial folds",
      "Hydration and support for the skin structure"
    ],
    "faqs": [
      {
        "question": "Are dermal fillers safe?",
        "answer": "Yes, we use FDA-approved hyaluronic acid fillers, which are biocompatible and naturally absorbed by the body over time."
      },
      {
        "question": "How soon will I see results?",
        "answer": "Results are visible immediately after the procedure."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "skin-boosters",
    "name": "Skin Boosters",
    "category": "aesthetic",
    "description": "Micro-injections of hydrating hyaluronic acid for deep, long-lasting skin moisture and glow.",
    "longDescription": "Skin boosters involve precise micro-injections of hyaluronic acid across the face or neck. Unlike fillers, they don't change facial shape; instead, they deeply hydrate and improve skin quality from within.",
    "benefits": [
      "Deep, long-lasting skin hydration",
      "Improvement in skin elasticity and firmness",
      "Radiant, glowing complexion",
      "Smoothing of fine, crepey skin lines"
    ],
    "faqs": [
      {
        "question": "How is this different from a filler?",
        "answer": "Fillers are used to build volume and shape. Skin boosters are thinner and spread out to simply hydrate and improve skin texture."
      },
      {
        "question": "How many sessions are needed?",
        "answer": "Usually, an initial course of 2-3 sessions is recommended, followed by maintenance every 6 months."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "acne-scar-revision",
    "name": "Acne Scar Revision",
    "category": "aesthetic",
    "description": "Multi-modality approach to significantly improve the appearance of all types of acne scars.",
    "longDescription": "A comprehensive, customized approach to acne scarring utilizing subcision, TCA CROSS, lasers, and MNRF. We target different types of scars (ice pick, rolling, boxcar) with specific modalities for the best outcome.",
    "benefits": [
      "Targeted treatment for specific scar types",
      "Release of tethered rolling scars (subcision)",
      "Elevation of deep ice-pick scars (TCA)",
      "Overall smoothing of skin texture"
    ],
    "faqs": [
      {
        "question": "Will my scars disappear completely?",
        "answer": "While complete disappearance is unlikely, our multi-modality approach can achieve 60-80% improvement, making scars far less noticeable."
      },
      {
        "question": "What is subcision?",
        "answer": "It is a minor procedure where we use a small needle to release fibrous bands pulling the skin down, lifting rolling scars."
      }
    ],
    "duration": "60 mins"
  },
  {
    "id": "stretch-mark-treatment",
    "name": "Stretch Mark Treatment",
    "category": "aesthetic",
    "description": "Advanced therapies to reduce the color and texture of stretch marks.",
    "longDescription": "Targeted treatments utilizing fractional lasers, microneedling, and specialized peels to improve the texture, width, and color of both red (new) and white (mature) stretch marks.",
    "benefits": [
      "Fading of red/purple stretch marks",
      "Improvement in texture of mature white marks",
      "Stimulation of collagen in affected areas",
      "Enhanced skin elasticity"
    ],
    "faqs": [
      {
        "question": "Can stretch marks be completely removed?",
        "answer": "They cannot be completely erased, but their appearance can be significantly minimized and blended with surrounding skin."
      },
      {
        "question": "Which treatments work best?",
        "answer": "A combination of fractional lasers and microneedling usually yields the best textural improvements."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "tattoo-removal",
    "name": "Tattoo Removal",
    "category": "aesthetic",
    "description": "Q-switched laser technology to safely and effectively fade unwanted tattoos.",
    "longDescription": "Advanced Q-switched laser treatments designed to shatter tattoo ink particles deep within the skin, allowing your body's immune system to safely clear them away over time.",
    "benefits": [
      "Effective fading of various ink colors",
      "Safe breakdown of tattoo pigments",
      "Minimal risk of scarring",
      "Suitable for amateur and professional tattoos"
    ],
    "faqs": [
      {
        "question": "How many sessions will it take to remove my tattoo?",
        "answer": "It typically takes 6 to 10 sessions, depending on the age, color, depth, and quality of the ink."
      },
      {
        "question": "Is tattoo removal painful?",
        "answer": "We use topical anesthetics and cooling devices to manage discomfort during the laser sessions."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "wart-corn-tag-removal",
    "name": "Wart/Corn/Tag Removal",
    "category": "aesthetic",
    "description": "Quick, safe, and precise removal of skin tags, warts, and corns.",
    "longDescription": "Using advanced radiofrequency (RF) cautery or lasers, we quickly and cleanly remove benign skin lesions like skin tags, warts, and painful corns with minimal discomfort and excellent cosmetic results.",
    "benefits": [
      "Quick, in-office procedure",
      "Clean removal with minimal scarring",
      "Relief from irritation or pain",
      "Excellent cosmetic outcome"
    ],
    "faqs": [
      {
        "question": "Will it leave a scar?",
        "answer": "When done properly with RF or laser, scarring is minimal to non-existent for small lesions like skin tags."
      },
      {
        "question": "How long does it take to heal?",
        "answer": "Small scabs form and typically fall off within a week, leaving fresh, healthy skin."
      }
    ],
    "duration": "30 mins"
  },
  {
    "id": "mole-removal",
    "name": "Mole Removal",
    "category": "aesthetic",
    "description": "Cosmetic removal of benign moles using precise surgical or laser techniques.",
    "longDescription": "Careful evaluation followed by the cosmetic removal of benign facial or body moles. We utilize techniques designed to minimize scarring and provide the best possible aesthetic outcome.",
    "benefits": [
      "Careful evaluation prior to removal",
      "Techniques optimized for cosmetic results",
      "Safe, comfortable procedure",
      "Option for histological examination if needed"
    ],
    "faqs": [
      {
        "question": "Can any mole be removed?",
        "answer": "Most benign moles can be removed cosmetically. We evaluate every mole first to ensure it is safe to remove."
      },
      {
        "question": "Which is better: laser or surgical removal?",
        "answer": "It depends on the mole's size, depth, and location. We will recommend the best approach for optimal cosmetic results."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "earlobe-repair",
    "name": "Earlobe Repair",
    "category": "aesthetic",
    "description": "Surgical repair of stretched, torn, or split earlobes.",
    "longDescription": "A minor surgical procedure to repair earlobes that have been torn, split, or elongated due to heavy earrings or trauma. We expertly reconstruct the lobe for a natural appearance.",
    "benefits": [
      "Reconstruction of split or torn earlobes",
      "Restoration of natural earlobe shape",
      "Quick outpatient procedure under local anesthesia",
      "Ability to re-pierce the ear eventually"
    ],
    "faqs": [
      {
        "question": "Does the procedure require stitches?",
        "answer": "Yes, fine sutures are used to carefully bring the tissue together and are usually removed after 7 days."
      },
      {
        "question": "When can I wear earrings again?",
        "answer": "You can typically have the ear re-pierced (slightly away from the scar) after a few months of complete healing."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "thread-lift",
    "name": "Thread Lift",
    "category": "aesthetic",
    "description": "Non-surgical facial lifting and tightening using dissolvable PDO threads.",
    "longDescription": "A minimally invasive procedure using biocompatible PDO threads placed under the skin to subtly lift sagging tissue and stimulate robust collagen production for firmer, tighter skin.",
    "benefits": [
      "Immediate subtle lifting effect",
      "Long-term collagen stimulation",
      "Non-surgical alternative to face lifts",
      "Minimal downtime compared to surgery"
    ],
    "faqs": [
      {
        "question": "How long do the results last?",
        "answer": "Results typically last 12 to 18 months as the threads dissolve and new collagen forms in their place."
      },
      {
        "question": "Is the procedure painful?",
        "answer": "Local anesthesia is used at the entry points to ensure the procedure is comfortable."
      }
    ],
    "duration": "60 mins"
  },
  {
    "id": "iv-glutathione-therapy",
    "name": "IV Glutathione Therapy",
    "category": "aesthetic",
    "description": "Intravenous antioxidant therapy for skin brightening, detox, and immune support.",
    "longDescription": "Direct intravenous infusion of Glutathione, a powerful master antioxidant, combined with Vitamin C. It helps detoxify the body, neutralize free radicals, and promote a brighter, more luminous skin tone.",
    "benefits": [
      "Powerful antioxidant and detoxification support",
      "Promotes a brighter, more even skin tone",
      "Boosts overall immune function",
      "Direct, 100% absorption via IV infusion"
    ],
    "faqs": [
      {
        "question": "How many sessions are recommended for skin brightening?",
        "answer": "Typically, a course of 5-10 sessions is recommended, depending on individual goals."
      },
      {
        "question": "Is IV administration safe?",
        "answer": "Yes, our infusions are administered by medical professionals in a strict, sterile clinical environment."
      }
    ],
    "duration": "45 mins"
  },
  {
    "id": "fractional-co2-laser",
    "name": "Fractional CO2 Laser Treatment",
    "category": "aesthetic",
    "description": "Gold standard skin resurfacing for acne scars, deep wrinkles, and stretch marks.",
    "longDescription": "Fractional CO2 Laser is the ultimate resurfacing therapy. It creates thousands of microscopic laser columns deep in the skin, initiating intense collagen production and replacing damaged skin with fresh, healthy tissues. Highly effective for deep boxcar/ice-pick acne scars, surgical scars, advanced wrinkles, and skin laxity.",
    "benefits": [
      "Significant reduction of deep acne scars and surgical scars",
      "Smoothing of fine lines, deep wrinkles, and textural irregularities",
      "Advanced skin tightening and pore size reduction",
      "Noticeable improvement in stretch marks and skin tone"
    ],
    "faqs": [
      {
        "question": "What is the downtime for Fractional CO2 Laser?",
        "answer": "There is a typical downtime of 5 to 7 days, during which the skin will appear red, followed by mild swelling and peeling as the skin resurfaces."
      },
      {
        "question": "How many sessions are required?",
        "answer": "Most patients see dramatic results with 3 to 4 sessions, spaced 4 to 6 weeks apart, depending on the severity of the skin concern."
      }
    ],
    "duration": "45 mins"
  }
];

export const EDUCATION_MILESTONES = [
  {
    "period": "Oct 2022 - Sept 2023",
    "degree": "Fellowship in Aesthetic Dermatology (FRGUHS)",
    "institution": "Bangalore Medical College & Research Institute, Bangalore",
    "description": "Advanced clinical training in high-end cosmetic dermatology procedures, lasers, anti-aging injections, and advanced chemical peels."
  },
  {
    "period": "May 2019 - June 2022",
    "degree": "MD Dermatology, Venereology & Leprosy",
    "institution": "Mahatma Gandhi Medical College & Research Institute, Puducherry",
    "description": "University Topper and Gold Medalist. Secured extensive academic excellence and research credentials. Specialized in complex clinical dermatology, clinical trials, and dermato-pathology."
  },
  {
    "period": "2011 - 2017",
    "degree": "MBBS",
    "institution": "MVJ Medical College & Research Hospital, Bangalore",
    "description": "Completed comprehensive undergraduate medical training and rotations, securing strong foundational knowledge in medicine and surgery."
  }
];

export const EXPERIENCES = [
  {
    "period": "2026 - Present",
    "role": "Founder and consultant",
    "organization": "Auraederm Skin Solutions, Sector 23, Gurugram",
    "description": "Founded Auraederm Skin Solutions with a vision to provide ethical, evidence-based dermatology care while offering comprehensive diagnosis, treatment, and advanced skin, hair, and aesthetic procedures."
  },
  {
    "period": "Dec 2023 - Present",
    "role": "Consultant Dermatologist",
    "organization": "Manipal Hospital, Palam Vihar, Gurugram",
    "description": "Consultant Dermatologist providing comprehensive diagnosis, treatment, and long-term management of skin, hair, and nail disorders, with a patient-centered and evidence-based approach."
  },
  {
    "period": "May 2019 - June 2022",
    "role": "Post Graduation (Department of DVL)",
    "organization": "Mahatma Gandhi Medical College, Puducherry",
    "description":  "Graduated as the University Topper and Gold Medalist in Dermatology, Venereology & Leprosy (DVL). Diagnosed and managed thousands of outpatient and inpatient clinical cases, conducted clinical trials, taught undergraduate students, and presented award-winning research papers."
  },
  {
    "period": "Aug 2016 - Aug 2017",
    "role": "Resident Intern",
    "organization": "MVJ Medical College & Research Hospital, Bangalore",
    "description": "Hands-on clinical internship across multiple departments including dermatology, emergency medicine, general surgery, and pediatrics."
  }
];



