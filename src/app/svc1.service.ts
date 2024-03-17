import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {

  /**
   * Represents the Svc1Service class.
   * This service provides functionality for Svc1.
   */
  constructor(public http:HttpClient) { 
    console.log("Svc1Service.constructor");
  }
  /**
   * Represents the initial content of the m_str property.
   */
  m_str: string = "My inital content";
  /**
   * Represents the str property.
   */
  public set str(s: string) {
    this.m_str = s;
  }
  public get str() {
    return this.m_str;
  }
}
