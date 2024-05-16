<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SupplyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id'=>$this->id,
            'category_id'=> new CategoryResource($this->category_id), 
            'management_unit_id'=> new ManagementUnitResource($this->management_unit_id), 
            'code'=>$this->code,
            'name'=>$this->name,
            'unit_price'=>$this->unit_price,
            'image'=>$this->image,
            'created_at'=>(new Carbon($this->created_at))->format('Y-m-d'),  
            'updated_at'=>(new Carbon($this->updated_at))->format('Y-m-d'),  
        ];
    }
}
