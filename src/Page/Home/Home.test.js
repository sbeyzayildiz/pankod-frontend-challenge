import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./index";
import Stream from "./Stream";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//   },
// });

describe("Home Component", () => {
  beforeEach(() => {
    render(<Home />, { wrapper: BrowserRouter });
  });

  test("Header is successfully", () => {
    const header = screen.getByText(/Popular Titles/);
    expect(header).toBeInTheDocument();
    
  });

//   test("Go to Movies", () => {
//     const route = "/movies";

//     // use <MemoryRouter> when you want to manually control the history
//     render(
//       <MemoryRouter initialEntries={[route]}>
//         <QueryClientProvider client={queryClient}>
//           <Stream />
//         </QueryClientProvider>
//       </MemoryRouter>
//     );

//     const title = screen.getByText(/Popular movies/)

//     // verify location display is rendered
//     expect(title).toBeInTheDocument();
//   });
});
