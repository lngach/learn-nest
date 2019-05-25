import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common'
import { BooksService } from './books.service'
import { CreateBookDTO } from './dto/create-book.dto'
import { UpdateBookDTO } from './dto/update-book.dto'

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  async getBooks() {
    return await this.booksService.getBooks()
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID) {
    return await this.booksService.getBook(bookID)
  }
  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    return await this.booksService.addBooks(createBookDTO)
  }
  @Post(':bookID')
  async updateBook(@Body() updateBookDTO: UpdateBookDTO) {
    return await this.booksService.updateBook(updateBookDTO)
  }

  @Delete(':bookID')
  async deleteBook(@Param('bookID') bookID) {
    return await this.booksService.deleteBook(bookID)
  }
}
