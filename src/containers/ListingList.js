import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchListings} from "../store/actions/listing";
import ListingItem from "../components/ListingItem"
import List from "@material-ui/core/List";
import "../style/listitemstyle.css"



class ListingList extends Component{
   
    componentDidMount(){
        console.log("Mounting")
        const {queryParameters,params} = this.props
        // if (!queryParameters.location|| ! queryParameters.search||! queryParameters.secondary){
        //       this.props.history.push("/")
        // }else{

          
        this.props.fetchListings(queryParameters.location,queryParameters.secondary,queryParameters.search,params.category,params.subcategory);  //uncomment later


        console.log("test props for mount",this.props)
        //  }

         
    }

    componentDidUpdate(prevProps){

        if(this.props.queryParameters.location === prevProps.queryParameters.location && this.props.queryParameters.search === prevProps.queryParameters.search && this.props.queryParameters.secondary === prevProps.queryParameters.secondary && this.props.params.category === prevProps.params.category &&  this.props.params.subcategory === prevProps.params.subcategory  && this.props.listings !== prevProps.listings){
            console.log("just updating here",this.props,prevProps)
            
        }else {

    

   
        console.log("calling")
        

        const {queryParameters,params} = this.props
       
          
        this.props.fetchListings(queryParameters.location,queryParameters.secondary,queryParameters.search,params.category,params.subcategory);  //uncomment later
   
    }

    }

    shouldComponentUpdate(nextProps,nextState){

        if(this.props.queryParameters.location === nextProps.queryParameters.location && this.props.queryParameters.search === nextProps.queryParameters.search && this.props.queryParameters.secondary === nextProps.queryParameters.secondary && this.props.params.category === nextProps.params.category &&  this.props.params.subcategory === nextProps.params.subcategory  && this.props.listings !== nextProps.listings){
            console.log("ok to update but no call api",this.props,nextProps)
            return true
        }
        
       
        if(this.props.queryParameters.location !== nextProps.queryParameters.location|| this.props.queryParameters.search !== nextProps.queryParameters.search|| this.props.queryParameters.secondary !== nextProps.queryParameters.secondary ||  this.props.params.category !== nextProps.params.category ||  this.props.params.subcategory !== nextProps.params.subcategory){
            console.log("ok to call api as at least one thing is not same",this.props,nextProps)
            return true
        }
        console.log("not ok to call api as evertyhing is same",this.props,nextProps)
        return false
        
    }

   
    render(){
         const {listings} = this.props
         const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
 
             const  getDate = (date) => {
                 var d = new Date(date)
                 var date = d.getDate()
                 var months = month[d.getMonth()]
                 return (months+" "+date)
             }  



          

                     
                var listingList = (listings.length != 0 )?

                  
                    
                     
                    listingList = listings[0].data.map(m=>{



                        return  <ListingItem  key ={m.id} id={m.id} date={getDate(m.date)} title={m.title} location={m.country} city={m.city}  state={m.state}username="Riken"/>
                    })

                
                    :listingList = <div>No result </div>
                  
                   


        return (
        <List dense={false} className="List">
          
          
          {listingList}
            
         </List>
        )
    }
   


}

function mapStateToProps(state){
    return{
        listings: state.list,
        whichState: state.firstStateReducer.whichState,
        errors: state.errors
    }
}

export default connect(mapStateToProps,{fetchListings})(ListingList)
