import MegaMenu, { MenuItem } from './components/MegaMenu';

const mockData: MenuItem[] = [
  {
    label: 'File',
    content: 'File menu content',
    children: [
      {
        label: 'New',
        content: 'Create a new file',
        children: [
          {
            label: 'Document',
            content: 'Create a new document',
            children: [
              {
                label: 'Blank Document',
                content: 'Start with a blank document',
                children: [],
              },
              {
                label: 'Template',
                content: 'Start with a template',
                children: [],
              },
            ],
          },
          {
            label: 'Project',
            content: 'Create a new project',
            children: [
              {
                label: 'Web Project',
                content: 'Create a new web project',
                children: [],
              },
              {
                label: 'Mobile Project',
                content: 'Create a new mobile project',
                children: [],
              },
            ],
          },
        ],
      },
      {
        label: 'Open',
        content: 'Open an existing file',
        children: [
          {
            label: 'Recent Files',
            content: 'Open a recently used file',
            children: [
              {
                label: 'File 1',
                content: 'Open File 1',
                children: [],
              },
              {
                label: 'File 2',
                content: 'Open File 2',
                children: [],
              },
            ],
          },
          {
            label: 'Browse',
            content: 'Browse for a file to open',
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: 'Edit',
    content: 'Edit menu content',
    children: [
      {
        label: 'Undo',
        content: 'Undo the last action',
        children: [],
      },
      {
        label: 'Redo',
        content: 'Redo the last undone action',
        children: [],
      },
      {
        label: 'Preferences',
        content: 'Edit application preferences',
        children: [
          {
            label: 'Appearance',
            content: 'Change the appearance settings',
            children: [
              {
                label: 'Themes',
                content: 'Choose a theme',
                children: [],
              },
              {
                label: 'Font Size',
                content: 'Adjust the font size',
                children: [],
              },
            ],
          },
          {
            label: 'Shortcuts',
            content: 'Customize keyboard shortcuts',
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: 'Help',
    content: 'Help menu content',
    children: [
      {
        label: 'Documentation',
        content: 'View the application documentation',
        children: [],
      },
      {
        label: 'About',
        content: 'Learn about the application',
        children: [
          {
            label: 'Version',
            content: 'View version information',
            children: [],
          },
          {
            label: 'Credits',
            content: 'View application credits',
            children: [
              {
                label: 'Developers',
                content: 'See the development team',
                children: [],
              },
              {
                label: 'Contributors',
                content: 'See all contributors',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <header className="w-full border-2 border-x-0 border-gray-200 flex justify-center">
      <div className="w-full flex items-center lg:w-[1024px]">
        <MegaMenu data={mockData} />
      </div>
    </header>
  );
}

export default App;
