import json, os

# 1. Enriched Periods / Eras JSON
periods = [
    {
        "id": "ottoman",
        "name_ar": "العهد العثماني وبدايات البريد (Ottoman Era)",
        "name_en": "Ottoman & Early Postal History",
        "name_fr": "Époque Ottoman et Poste Ancienne",
        "years": "1516 - 1830",
        "description": "أنظمة المراسلة والبريد الزجلي والتنظيمي في إيالة الجزائر البحرية قل استخدام الطوابع الحديثة."
    },
    {
        "id": "colonial",
        "name_ar": "الفترة الاستعمارية (Colonial Period)",
        "name_en": "Colonial Postal Period",
        "name_fr": "Période Coloniale",
        "years": "1830 - 1962",
        "description": "الطوابع البريدية الفرنسية والموشحة بأسماء المدن الجزائرية واستخدامات البريد العسكري والتنفيذي."
    },
    {
        "id": "revolution",
        "name_ar": "مرحلة الثورة التحريرية (Revolution Era)",
        "name_en": "Liberation War Era",
        "name_fr": "Guerre de Libération Nationale",
        "years": "1954 - 1962",
        "description": "منشورات وأختام جبهة التحرير الوطني ورسائل المجاهدين الموجهة للهيئات الدولية قبل الاستقلال."
    },
    {
        "id": "independence-dawn",
        "name_ar": "فجر الاستقلال والسيادة (Dawn of Independence)",
        "name_en": "Dawn of Independence",
        "name_fr": "Aube de l'Indépendance",
        "years": "1962 - 1970",
        "description": "تأسيس مؤسسة البريد السيادية وإصدار أول طابع بريدي وطني بوشاح العلم الوطني عام 1962."
    },
    {
        "id": "building-nation",
        "name_ar": "عصر التنمية والبناء (National Construction)",
        "name_en": "Modern Nation Building",
        "name_fr": "Construction Nationale",
        "years": "1970 - 2000",
        "description": "توثيق التأميمات، الثورة الزراعية، الصناعات الثقيلة، والأحداث الرياضية والدبلوماسية الكبرى."
    },
    {
        "id": "modern-algeria",
        "name_ar": "الجمهورية الحديثة (Modern Republic)",
        "name_en": "Modern Algeria Era",
        "name_fr": "Algérie Moderne",
        "years": "2000 - الآن",
        "description": "الإصدارات التذكارية الرقمية الحديثة، اليوبيلات الذهبية، والتضامن الإنساني والدولي."
    }
]

# 2. Designers JSON
designers = [
    {
        "id": "ali-khodja",
        "name_ar": "علي علي خوجة (Ali Ali-Khodja)",
        "name_en": "Ali Ali-Khodja",
        "name_fr": "Ali Ali-Khodja",
        "bio_ar": "أحد قامات الفن التشكيلي الجزائري ومصمم أول طابع بريدي للجمهورية الجزائرية المستقلة عام 1962.",
        "years_active": "1962 - 2010",
        "stamps_count": 14
    },
    {
        "id": "mohammed-racim",
        "name_ar": "محمد راسم (Mohammed Racim)",
        "name_en": "Mohammed Racim",
        "name_fr": "Mohammed Racim",
        "bio_ar": "رائد فن المنمنمات الإسلامية والجزائرية، صمم العديد من الطوابع التاريخية والتراثية العالية الجمال.",
        "years_active": "1930 - 1975",
        "stamps_count": 22
    },
    {
        "id": "mohammed-temmam",
        "name_ar": "محمد تمام (Mohammed Temmam)",
        "name_en": "Mohammed Temmam",
        "name_fr": "Mohammed Temmam",
        "bio_ar": "فنان تشكيلي وزخرفي صمم سلاسل بريدية توثق الألعاب المتوسطية والتراث الجزائري.",
        "years_active": "1963 - 1988",
        "stamps_count": 18
    },
    {
        "id": "bachir-yelles",
        "name_ar": "بشير يني / يلس (Bachir Yelles)",
        "name_en": "Bachir Yelles",
        "name_fr": "Bachir Yelles",
        "bio_ar": "مؤسس المدرسة الوطنية للفنون الجميلة بالجزائر المستقلة ومصمم معالم ومؤسسات طوابعية خالدة.",
        "years_active": "1962 - 2005",
        "stamps_count": 15
    }
]

# 3. Exhibitions JSON
exhibitions = [
    {
        "id": "road-to-independence",
        "title_ar": "الطريق إلى الاستقلال والسيادة (1954 - 1962)",
        "title_en": "The Road to Independence",
        "title_fr": "Le Chemin de l'Indépendance",
        "subtitle_ar": "معرض افتراضي يسرد تاريخ نضال الشعب الجزائري من خلال الطوابع التذكارية الأولى.",
        "cover_image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC_V5G1_J6bJJn22nOnECiomkQyLxAqQOEBJsAolj0FiBcr-6pTwNkfQjI7JKSl15-ztHzeZxR-T3z9oI9GeIrI_WpDeRJ49UXgHTBwJ637WUF1iucyUaV594Fxk2LQ3_jst_WafyRagmYZci6OTPLfjIuV3C_rz_xkIIBlA5xv1qmbYAghY9kwdxNgK78AicU_t1DyTRbl6KM81wumfg3pKGGjXlOYgqCQBHVMOz5uA3BZZI1bibds",
        "description_ar": "يأخذك هذا المعرض في رحلة زمانية توثق إعلان السيادة الوطنية وإصدار طابع 1 نوفمبر 1962 واليوبيلات الذهبية للثورة.",
        "stamp_ids": ["1962-independence-commemorative", "1963-emir-abdelkader", "1972-10th-anniversary-independence", "2004-50th-anniversary-revolution-1954", "2012-50th-anniversary-independence"]
    },
    {
        "id": "algerian-heritage-crafts",
        "title_ar": "روائع التراث والصناعات التقليدية",
        "title_en": "Masterpieces of Heritage & Crafts",
        "title_fr": "Chefs-d'œuvre du Patrimoine et Artisanat",
        "subtitle_ar": "معرض يستعرض الفنون التقليدية، السجاد الأصيل، ونقوش التاسيلي العالمية.",
        "cover_image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAu2GZHZx7P4vltJMo7xcmZrohwm0tqaCXD9oJ_g-xLRGOrdehQXFgNVWy727BrVu2jrGfoFR048aMPY7skyKjyFj4cdJ6mRnEKpugYLc2HfpXWj-SpK9bSaS00oZOjcudPh5gY6cdIfi-gzRNNHY2cMzQxO0Xc1X7dBpHAsabNqPuOg59_zlS0QBcI8UGuTizR1adamFO5027reBDDJFwuuogkYdoDywea3B7fHaDy6G_Icp_moJuX",
        "description_ar": "استمتع بمشاهدة التنوع الثقافي المعماري والنسيجي للجزائر من غرداية وتلمسان إلى جبال التاسيلي الشاهقة.",
        "stamp_ids": ["1964-traditional-crafts-carpet", "1990-tassili-n-ajjer-rock-art", "1982-algerian-fauna-gazelle"]
    }
]

# Write JSON files
with open('data/periods.json', 'w', encoding='utf-8') as f: json.dump(periods, f, ensure_ascii=False, indent=2)
with open('data/designers.json', 'w', encoding='utf-8') as f: json.dump(designers, f, ensure_ascii=False, indent=2)
with open('data/exhibitions.json', 'w', encoding='utf-8') as f: json.dump(exhibitions, f, ensure_ascii=False, indent=2)

print("Saved enriched JSON datasets for periods, designers, and exhibitions.")
