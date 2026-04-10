#!/usr/bin/env python3
"""
Check Images Script for Botanical Atlas Haiti
Validates image existence and generates reports for missing images.
"""

import json
import os
import csv
from pathlib import Path
from collections import defaultdict

def load_plants_data(json_path):
    """Load plant data from JSON file."""
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def check_image_existence(image_path, assets_base):
    """Check if an image file exists in the assets directory."""
    full_path = os.path.join(assets_base, image_path)
    return os.path.isfile(full_path)

def main():
    # Define paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    json_path = project_root / '_data' / 'plantes_full.json'
    assets_base = project_root / 'assets'
    reports_dir = project_root / 'reports'

    # Create reports directory if it doesn't exist
    reports_dir.mkdir(exist_ok=True)

    # Load data
    print("Loading plant data...")
    plants = load_plants_data(str(json_path))
    print(f"Loaded {len(plants)} plants")

    # Track statistics
    total_images = 0
    existing_images = 0
    missing_images = 0
    missing_by_species = defaultdict(list)
    csv_rows = []

    # Process each plant
    print("\nChecking images...")
    for plant in plants:
        plant_id = plant.get('id', 'unknown')
        scientific_name = plant.get('nom_scientifique', 'unknown')

        if 'images' in plant and isinstance(plant['images'], list):
            for image_path in plant['images']:
                total_images += 1
                exists = check_image_existence(image_path, str(assets_base))

                if exists:
                    existing_images += 1
                else:
                    missing_images += 1
                    # Extract species name from path
                    parts = image_path.split('/')
                    if len(parts) >= 3:
                        species = parts[2]
                        missing_by_species[species].append({
                            'plant_id': plant_id,
                            'scientific_name': scientific_name,
                            'image_path': image_path
                        })

                # Add to CSV row
                csv_rows.append({
                    'plant_id': plant_id,
                    'scientific_name': scientific_name,
                    'expected_image_path': image_path,
                    'exists': 'true' if exists else 'false'
                })

    # Generate CSV report
    csv_path = reports_dir / 'image_mapping.csv'
    print(f"\nWriting image mapping to {csv_path}...")
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['plant_id', 'scientific_name', 'expected_image_path', 'exists'])
        writer.writeheader()
        writer.writerows(csv_rows)

    # Generate summary report
    summary_path = reports_dir / 'image_report.txt'
    print(f"Writing summary report to {summary_path}...")
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write("BOTANICAL ATLAS HAITI - IMAGE VERIFICATION REPORT\n")
        f.write("=" * 60 + "\n\n")
        f.write(f"Report generated for plant database with {len(plants)} species\n\n")
        f.write("SUMMARY STATISTICS:\n")
        f.write("-" * 60 + "\n")
        f.write(f"Total expected images:    {total_images}\n")
        f.write(f"Images found:             {existing_images}\n")
        f.write(f"Images missing:           {missing_images}\n")
        f.write(f"Percentage complete:      {100 * existing_images / total_images:.1f}%\n\n")

        if missing_images > 0:
            f.write("MISSING IMAGES BY SPECIES:\n")
            f.write("-" * 60 + "\n")
            for species in sorted(missing_by_species.keys()):
                missing_list = missing_by_species[species]
                f.write(f"\n{species}:\n")
                for entry in missing_list:
                    f.write(f"  - {entry['image_path']}\n")
                    f.write(f"    (Plant ID: {entry['plant_id']}, {entry['scientific_name']})\n")
        else:
            f.write("All expected images are present!\n")

    # Print summary to console
    print("\n" + "=" * 60)
    print("IMAGE VERIFICATION SUMMARY")
    print("=" * 60)
    print(f"Total expected images:    {total_images}")
    print(f"Images found:             {existing_images}")
    print(f"Images missing:           {missing_images}")
    print(f"Percentage complete:      {100 * existing_images / total_images:.1f}%")

    if missing_images > 0:
        print(f"\nFound missing images in {len(missing_by_species)} species directories")
        print(f"See {summary_path} for detailed list")
    else:
        print("\nAll expected images are present!")

    print(f"\nReports saved to: {reports_dir}")
    print(f"  - image_mapping.csv: Plant-to-image mapping with existence status")
    print(f"  - image_report.txt: Detailed report with missing image list")

if __name__ == '__main__':
    main()
