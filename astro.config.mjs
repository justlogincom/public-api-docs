import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'JustLogin API',
      logo: {
        src: '/src/assets/img/plane.png',
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Authentication', link: '/getting-started/authentication/' },
            { label: 'Paging', link: '/getting-started/paging/' },
            { label: 'Errors', link: '/getting-started/errors/' },
            { label: 'API Environments', link: '/getting-started/environments/' },
          ],
        },
        {
          label: 'Employee API',
          items: [
            { label: 'Introduction', link: '/api/employee/introduction/' },
            { label: 'List Employees', link: '/api/employee/list-employees/' },
            { label: 'Get Employee', link: '/api/employee/get-employee/' },
          ],
        },
        {
          label: 'Payroll API',
          items: [
            { label: 'Introduction', link: '/api/payroll/introduction/' },
            { label: 'Get Pay Information', link: '/api/payroll/pay-information/' },
            { label: 'Get Bank Information', link: '/api/payroll/bank-information/' },
          ],
        },
        {
          label: 'Leave API',
          items: [
            { label: 'Introduction', link: '/api/leave/introduction/' },
            { label: 'List Leave Types', link: '/api/leave/list-leave-types/' },
            { label: 'Get Leave Information', link: '/api/leave/leave-information/' },
          ],
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
