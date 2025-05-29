import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: 'البرمجة',
      subtitle: 'مطور الشخصي',
      links: [
        { name: 'دورتي', href: '/programming/courses' },
        { name: 'شهادتي', href: '/programming/certificates' },
        { name: 'الدعم الفني', href: '/programming/support' },
        { name: 'تسجيل الدخول', href: '/programming/login' },
        { name: 'إنشاء حساب', href: '/programming/signup' },
        { name: 'اختباراتي', href: '/programming/tests' }
      ]
    },
    {
      title: 'الأمن السيبراني',
      subtitle: 'مطور الشخصي',
      links: [
        { name: 'دورتي', href: '/cybersecurity/courses' },
        { name: 'شهادتي', href: '/cybersecurity/certificates' },
        { name: 'الدعم الفني', href: '/cybersecurity/support' },
        { name: 'تسجيل الدخول', href: '/cybersecurity/login' },
        { name: 'إنشاء حساب', href: '/cybersecurity/signup' },
        { name: 'اختباراتي', href: '/cybersecurity/tests' }
      ]
    },
    {
      title: 'تطوير تطبيقات الهاتف',
      subtitle: 'مطور الشخصي',
      links: [
        { name: 'دورتي', href: '/mobile/courses' },
        { name: 'شهادتي', href: '/mobile/certificates' },
        { name: 'الدعم الفني', href: '/mobile/support' },
        { name: 'تسجيل الدخول', href: '/mobile/login' },
        { name: 'إنشاء حساب', href: '/mobile/signup' },
        { name: 'اختباراتي', href: '/mobile/tests' }
      ]
    },
    {
      title: 'تطوير الويب',
      subtitle: 'مطور الشخصي',
      links: [
        { name: 'دورتي', href: '/web/courses' },
        { name: 'شهادتي', href: '/web/certificates' },
        { name: 'الدعم الفني', href: '/web/support' },
        { name: 'تسجيل الدخول', href: '/web/login' },
        { name: 'إnشاء حساب', href: '/web/signup' },
        { name: 'اختباراتي', href: '/web/tests' }
      ]
    },
    {
      title: 'التصميم',
      subtitle: 'مطور الشخصي',
      links: [
        { name: 'دورتي', href: '/design/courses' },
        { name: 'شهادتي', href: '/design/certificates' },
        { name: 'الدعم الفني', href: '/design/support' },
        { name: 'تسجيل الدخول', href: '/design/login' },
        { name: 'إنشاء حساب', href: '/design/signup' },
        { name: 'اختباراتي', href: '/design/tests' }
      ]
    },
    {
      title: 'التصميم',
      subtitle: 'مطور الشخصي',
      links: [
        { name: 'دورتي', href: '/design2/courses' },
        { name: 'شهادتي', href: '/design2/certificates' },
        { name: 'الدعم الفني', href: '/design2/support' },
        { name: 'تسجيل الدخول', href: '/design2/login' },
        { name: 'إنشاء حساب', href: '/design2/signup' },
        { name: 'اختباراتي', href: '/design2/tests' }
      ]
    },
    {
      title: 'ريادة الأعمال',
      subtitle: 'مطور الشخصي',
      links: [
        { name: 'دورتي', href: '/business/courses' },
        { name: 'شهادتي', href: '/business/certificates' },
        { name: 'الدعم الفني', href: '/business/support' },
        { name: 'تسجيل الدخول', href: '/business/login' },
        { name: 'إنشاء حساب', href: '/business/signup' },
        { name: 'اختباراتي', href: '/business/tests' }
      ]
    },
    {
      title: 'علوم البيانات',
      subtitle: 'مطور الشخصي',
      links: [
        { name: 'دورتي', href: '/data/courses' },
        { name: 'شهادتي', href: '/data/certificates' },
        { name: 'الدعم الفني', href: '/data/support' },
        { name: 'تسجيل الدخول', href: '/data/login' },
        { name: 'إنشاء حساب', href: '/data/signup' },
        { name: 'اختباراتي', href: '/data/tests' }
      ]
    }
  ];

  return (
    <footer className="!bg-blue-50 !py-12 !px-6" dir="rtl">
      <div className="!max-w-7xl !mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]">
          {footerSections.map((section, index) => (
            <div key={index}>
              {/* Title */}
              <h3 className="!text-lg !font-bold text-[#23A0D0] !mb-4">
                {section.title}
              </h3>
              
              {/* Subtitle */}
              <div className="!mb-3">
                <span className="!text-gray-700 !font-medium !text-sm">
                  {section.subtitle}
                </span>
              </div>
              
              {/* Links */}
              <ul className="!space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="!text-gray-600 !text-sm hover:text-[#23A0D0] !transition-colors !duration-200 !block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;