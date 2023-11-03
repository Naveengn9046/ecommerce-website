// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchInput: string = '';
  itemsPerPage: number = 10; // Default number of items per page
  currentPage: number = 1;
  selectedProduct: any | null = null;
  isPopupOpen = false;
  escapeListener: any;
  showOptions: boolean = false;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.escapeListener = this.onEscapeKey.bind(this);
    document.addEventListener('keydown', this.escapeListener);
    this.products = this.productService.getProducts();
    this.updateFilteredProducts();
  }

  onSearch() {
    this.updateFilteredProducts();
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.updateFilteredProducts();
  }
  onItemsPerPageChange(newValue: string) {
    this.itemsPerPage = parseInt(newValue, 10); // Parse the value as an integer
    this.currentPage = 1; // Reset the current page when changing items per page
    this.updateFilteredProducts();
  }  

  private updateFilteredProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredProducts = this.products
      .filter((product) => product.name.toLowerCase().includes(this.searchInput.toLowerCase()))
      .slice(startIndex, endIndex);
  }
  showImages(productId: number) {
    this.selectedProduct = this.filteredProducts.find((product) => product.id === productId);
    this.isPopupOpen = true;
  }
  

  closePopup() {
    this.selectedProduct = null;
    this.isPopupOpen = false;
  }

  onEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isPopupOpen) {
      this.isPopupOpen = false;
    }
  }
  ngOnDestroy() {
    document.removeEventListener('keydown', this.escapeListener);
  }

  onCategoryClick(category: string) {
    if (category === 'kurta') {
      // Filter products related to Kurta
      this.filteredProducts = this.products.filter(product => product.category === 'Kurta');
    }
    if (category === 'jumpsuit') {
      // Filter products related to Kurta
      this.filteredProducts = this.products.filter(product => product.category === 'jumpsuit');
    }
    if (category === 'saree') {
      // Filter products related to Kurta
      this.filteredProducts = this.products.filter(product => product.category === 'saree');
    }
  }
  
}
