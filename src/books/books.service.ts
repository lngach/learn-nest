import { Injectable, HttpException } from '@nestjs/common'
import { BOOKS } from '../mock/books.mock'
import { promises } from 'fs'
import { resolve } from 'url'
@Injectable()
export class BooksService {
  books = BOOKS

  getBooks(): Promise<any> {
    return new Promise(resolve => resolve(this.books))
  }
  getBook(bookID): Promise<any> {
    const id = Number(bookID)
    return new Promise(resolve => {
      const book = this.books.find(book => book.id === id)
      if (!book) {
        throw new HttpException('Book is not exist', 404)
      }
      resolve(book)
    })
  }
  addBooks(book): Promise<any> {
    return new Promise(resolve => {
      this.books.push(book)
      resolve(this.books)
    })
  }
  deleteBook(bookID): Promise<any> {
    const id = Number(bookID)
    return new Promise(resolve => {
      const index = this.books.findIndex(book => book.id === id)
      if (index === -1) {
        throw new HttpException('Book is not exist', 404)
      }
      this.books.splice(index, 1)
      resolve(this.books)
    })
  }
  updateBook(book): Promise<any> {
    const id = Number(book.id)
    const index = this.books.findIndex(book => book.id === id)
    if (index === -1) {
      throw new HttpException('Đeo tồn tại', 404)
    }
    const bookup = this.books[index]
    bookup.title = book.title
    bookup.description = book.description
    bookup.author = book.author
    return new Promise(resolve => resolve(this.books))
  }
}
